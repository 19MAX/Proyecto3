import Personaje from "../model/personajeModel.js";
import fs from "fs";
import path from "path";
import mongoose from "mongoose";

// Obtener todos los personajes
export const getPersonajes = async (req, res) => {
  try {
    const personajes = await Personaje.find();

    if (!personajes || personajes.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No hay personajes creados",
        data: [],
      });
    }

    return res.status(200).json({
      success: true,
      message: "Personajes encontrados",
      count: personajes.length,
      data: personajes,
    });
  } catch (error) {
    console.error("Error al obtener personajes:", error);
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor",
      error: error.message,
    });
  }
};

// Obtener un personaje por ID
export const getPersonajeById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validar que el ID sea válido
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "ID de personaje inválido",
      });
    }

    // Buscar el personaje por ID
    const personaje = await Personaje.findById(id);

    if (!personaje) {
      return res.status(404).json({
        success: false,
        message: "Personaje no encontrado",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Personaje encontrado",
      data: personaje,
    });
  } catch (error) {
    console.error("Error al obtener personaje:", error);
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor",
      error: error.message,
    });
  }
};

// Crear un nuevo personaje
export const createPersonaje = async (req, res) => {
  try {
    // Verificar si se subió la imagen
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Debes subir una imagen",
      });
    }

    const { nombre, raza, poder, transformaciones } = req.body;

    const nuevoPersonaje = new Personaje({
      imagen: `/assets/images/personajes/${req.file.filename}`, // Ruta relativa
      nombre,
      raza,
      poder,
      transformaciones: transformaciones ? transformaciones.split(",") : [],
    });

    const personajeGuardado = await nuevoPersonaje.save();

    return res.status(201).json({
      success: true,
      message: "Personaje creado con éxito",
      data: personajeGuardado,
    });
  } catch (error) {
    console.error("Error al crear personaje:", error);
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor",
      error: error.message,
    });
  }
};

// Actualizar un personaje existente
export const updatePersonaje = async (req, res) => {
  try {
    const { id } = req.params;

    // Validar que el ID sea válido
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "ID de personaje inválido",
      });
    }

    // Buscar el personaje existente
    const personajeExistente = await Personaje.findById(id);
    if (!personajeExistente) {
      return res.status(404).json({
        success: false,
        message: "Personaje no encontrado",
      });
    }

    const { nombre, raza, poder, transformaciones } = req.body;

    // Preparar los datos a actualizar
    const datosActualizacion = {
      nombre: nombre || personajeExistente.nombre,
      raza: raza || personajeExistente.raza,
      poder: poder || personajeExistente.poder,
      transformaciones: transformaciones
        ? transformaciones.split(",")
        : personajeExistente.transformaciones,
    };

    // Si se subió una nueva imagen
    if (req.file) {
      // Eliminar la imagen anterior si existe
      if (personajeExistente.imagen) {
        const imagenAnterior = path.join(
          process.cwd(),
          personajeExistente.imagen
        );
        if (fs.existsSync(imagenAnterior)) {
          fs.unlinkSync(imagenAnterior);
        }
      }

      // Asignar la nueva imagen
      datosActualizacion.imagen = `/assets/images/personajes/${req.file.filename}`;
    }

    // Actualizar el personaje
    const personajeActualizado = await Personaje.findByIdAndUpdate(
      id,
      datosActualizacion,
      { new: true, runValidators: true }
    );

    return res.status(200).json({
      success: true,
      message: "Personaje actualizado con éxito",
      data: personajeActualizado,
    });
  } catch (error) {
    console.error("Error al actualizar personaje:", error);
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor",
      error: error.message,
    });
  }
};

// Eliminar un personaje
export const deletePersonaje = async (req, res) => {
  try {
    const { id } = req.params;

    // Validar que el ID sea válido
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "ID de personaje inválido",
      });
    }

    // Buscar y eliminar el personaje
    const personajeEliminado = await Personaje.findByIdAndDelete(id);

    if (!personajeEliminado) {
      return res.status(404).json({
        success: false,
        message: "Personaje no encontrado",
      });
    }

    // Eliminar la imagen asociada si existe
    if (personajeEliminado.imagen) {
      const rutaImagen = path.join(process.cwd(), personajeEliminado.imagen);
      if (fs.existsSync(rutaImagen)) {
        try {
          fs.unlinkSync(rutaImagen);
        } catch (error) {
          console.warn("No se pudo eliminar la imagen:", error.message);
        }
      }
    }

    return res.status(200).json({
      success: true,
      message: "Personaje eliminado con éxito",
      data: personajeEliminado,
    });
  } catch (error) {
    console.error("Error al eliminar personaje:", error);
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor",
      error: error.message,
    });
  }
};

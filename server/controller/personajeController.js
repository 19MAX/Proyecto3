import Personaje from "../model/personajeModel.js";

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

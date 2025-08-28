import express from "express";
import { connectDB, PORT } from "./config/database.js";
import app from "./app.js";

const startServer = async () => {
  try {
    //Conectarse a MongoDB
    await connectDB();

    // Iniciar el servidor
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
    process.exit(1);
  }
};

// Llamar a la función para iniciar el servidor
startServer();

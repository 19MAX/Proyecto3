import express from "express";
import cors from "cors";
import personajeRoutes from "./routes/personajeRoutes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api", personajeRoutes);

export default app;

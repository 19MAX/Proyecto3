import express from "express";
import cors from "cors";
import personajeRoutes from "./routes/personajeRoutes.js";
import { setupSwagger } from "./swagger.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Iniciar Swagger
setupSwagger(app);

// Rutas de la API
app.use("/api", personajeRoutes);

// Colocar archivos estáticos dentro de (api/)
app.use("/api/assets", express.static("assets"));

// Ruta principal redirige a la documentación
app.get("/", (req, res) => {
  res.redirect("/api-docs");
});

export default app;
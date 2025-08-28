import { Router } from "express";
import { getPersonajes } from "../controller/personajeController.js";

const router = Router();

// Obtener todos los personajes
router.get('/personajes', getPersonajes);


export default router;
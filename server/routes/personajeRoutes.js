import express, { Router } from "express";
import { getPersonajes, create, getCharacterById, updateCharacter, deleteCharacter  } from "../controller/personajeController.js";


const router = express.Router();

// Obtener todos los personajes
router.get('/personajes', getPersonajes);
router.post("/character", create);
router.get("/character/:id", getCharacterById);
router.put("/update/character/:id", updateCharacter);
router.delete("/delete/character/:id", deleteCharacter);

export default router;

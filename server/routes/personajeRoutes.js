import { Router } from "express";
import { getPersonajes, createPersonaje,deletePersonaje,getPersonajeById,updatePersonaje } from "../controller/personajeController.js";
import { upload } from "../config/multerConfig.js";

const router = Router();

/**
 * @swagger
 * /api/personajes:
 *   get:
 *     summary: Obtiene todos los personajes
 *     tags: [Personajes]
 *     responses:
 *       200:
 *         description: Lista de personajes obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Personajes encontrados"
 *                 count:
 *                   type: number
 *                   example: 5
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Personaje'
 *       404:
 *         $ref: '#/components/responses/404'
 *       500:
 *         $ref: '#/components/responses/500'
 */
router.get('/personajes', getPersonajes);

/**
 * @swagger
 * /api/personajes/{id}:
 *   get:
 *     summary: Obtiene un personaje por ID
 *     tags: [Personajes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del personaje a obtener
 *     responses:
 *       200:
 *         description: Personaje encontrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Personaje encontrado"
 *                 data:
 *                   $ref: '#/components/schemas/Personaje'
 *       404:
 *         description: Personaje no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       400:
 *         description: ID inválido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         $ref: '#/components/responses/500'
 */
router.get('/personajes/:id', getPersonajeById);

/**
 * @swagger
 * /api/personajes/crear:
 *   post:
 *     summary: Crea un nuevo personaje
 *     tags: [Personajes]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - raza
 *               - poder
 *             properties:
 *               imagen:
 *                 type: string
 *                 format: binary
 *                 description: Archivo de imagen del personaje
 *               nombre:
 *                 type: string
 *                 example: "Goku"
 *               raza:
 *                 type: string
 *                 example: "Saiyajin"
 *               poder:
 *                 type: number
 *                 example: 9000
 *               transformaciones:
 *                 type: string
 *                 description: Lista separada por comas
 *                 example: "Super Saiyajin,SSJ Blue"
 *     responses:
 *       201:
 *         description: Personaje creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Personaje creado con éxito"
 *                 data:
 *                   $ref: '#/components/schemas/Personaje'
 *       400:
 *         description: Error de validación o falta de imagen
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         $ref: '#/components/responses/500'
 */
router.post('/personajes/crear', upload.single('imagen'), createPersonaje);

/**
 * @swagger
 * /api/personajes/editar/{id}:
 *   put:
 *     summary: Actualiza un personaje existente
 *     tags: [Personajes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del personaje a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               imagen:
 *                 type: string
 *                 format: binary
 *                 description: Nueva imagen del personaje (opcional)
 *               nombre:
 *                 type: string
 *                 example: "Vegeta"
 *               raza:
 *                 type: string
 *                 example: "Saiyajin"
 *               poder:
 *                 type: number
 *                 example: 8500
 *               transformaciones:
 *                 type: string
 *                 description: Lista separada por comas
 *                 example: "Super Saiyajin,SSJ Blue Evolution"
 *     responses:
 *       200:
 *         description: Personaje actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Personaje actualizado con éxito"
 *                 data:
 *                   $ref: '#/components/schemas/Personaje'
 *       404:
 *         description: Personaje no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       400:
 *         description: ID inválido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         $ref: '#/components/responses/500'
 */
router.put('/personajes/editar/:id', upload.single('imagen'), updatePersonaje);

/**
 * @swagger
 * /api/personajes/eliminar/{id}:
 *   delete:
 *     summary: Elimina un personaje
 *     tags: [Personajes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del personaje a eliminar
 *     responses:
 *       200:
 *         description: Personaje eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Personaje eliminado con éxito"
 *       404:
 *         description: Personaje no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       400:
 *         description: ID inválido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         $ref: '#/components/responses/500'
 */
router.delete('/personajes/eliminar/:id', deletePersonaje);
export default router;

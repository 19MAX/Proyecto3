# API Dragon Ball Z

API para gestionar personajes de Dragon Ball Z usando Node.js, Express y MongoDB.

## Iniciar

```bash
# Acceder a la carpeta
cd server

# Instalar dependencias
npm install

## Configuración

Crear archivo `.env` en la raíz del proyecto dentro de /server:

```

```bash
PORT=8000
MONGO_URL=mongodb://localhost:27017/dragonballz
```

## Uso

```bash
# Modo desarrollo
npm run dev

# Modo producción (Aun en desarrollo)
//npm start
```

## Endpoints

### Obtener todos los personajes
```
GET /api/personajes

Datos de ejemplo

{
  "_id": "64a1c23b4e9a2f7c9f0c1234",
  "nombre": "Goku",
  "raza": "Saiyajin",
  "poder": 9001,
  "transformaciones": [
    "Super Saiyajin",
    "Super Saiyajin Blue",
    "Ultra Instinto"
  ],
  "createdAt": "2023-07-01T10:00:00.000Z",
  "updatedAt": "2023-07-01T10:00:00.000Z"
}

```

## Requisitos

- Node.js 16+
- MongoDB 4.4+
- npm 8+

## Tecnologías

- Express.js
- MongoDB
- Mongoose
- CORS
- Dotenv
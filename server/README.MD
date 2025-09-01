# API Dragon Ball Z

API RESTful completa para gestionar personajes de Dragon Ball Z con operaciones CRUD, subida de imágenes y documentación interactiva usando Node.js, Express y MongoDB.

## Características

- CRUD completo de personajes
- Subida y gestión de imágenes
- Documentación automática con Swagger
- Validación de datos
- CORS habilitado
- Servicio de archivos estáticos

## Iniciar

```bash
# Acceder a la carpeta
cd server

# Instalar dependencias
npm install

# Crear carpeta para imágenes (si no existe)
mkdir -p assets/images/personajes
```

## Configuración

### 1. Configurar MongoDB

#### Crear la Base de Datos con MongoDB Compass
1. **Conectar a MongoDB**:
   - Abrir MongoDB Compass
   - En la ventana de conexión, usar: `mongodb://localhost:27017`
   - Hacer clic en "Connect"

2. **Crear la base de datos**:
   - Hacer clic en el botón verde "+" o "Create Database"
   - **Nombre de la base de datos**: `dragonballz`
   - **Nombre de la colección**: `personajes`
   - Hacer clic en "Create Database"

3. **Verificar la creación**:
   - En el panel izquierdo debería aparecer la base de datos `dragonballz`
   - Al expandirla, verás la colección `personajes`

### 2. Configurar Variables de Entorno

Crear archivo `.env` en la raíz del proyecto dentro de `/server`:

```bash
PORT=5000
MONGO_URL=mongodb://localhost:27017/dragonballz
```

## Uso

```bash
# Modo desarrollo
npm run dev

# Modo producción (Aún en desarrollo)
# npm start
```

La API estará disponible en: `http://localhost:5000`

## Documentación

Una vez iniciado el servidor, accede a la documentación interactiva completa de todos los endpoints:

**🔗 [http://localhost:5000/api-docs](http://localhost:5000/api-docs)**

La documentación incluye:
- Todos los endpoints disponibles
- Esquemas de datos
- Ejemplos de peticiones y respuestas
- Interfaz para probar la API directamente

## Endpoints Principales

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/api/personajes` | Obtener todos los personajes |
| `GET` | `/api/personajes/:id` | Obtener un personaje por ID |
| `POST` | `/api/personajes/crear` | Crear nuevo personaje |
| `PUT` | `/api/personajes/editar/:id` | Actualizar personaje |
| `DELETE` | `/api/personajes/eliminar/:id` | Eliminar personaje |

## Estructura de Datos

### Personaje
```javascript
{
  "_id": "ObjectId",
  "imagen": "/assets/images/personajes/imagen-123456.jpg",
  "nombre": "Goku",
  "raza": "Saiyajin",
  "poder": 9001,
  "transformaciones": ["Super Saiyajin", "Ultra Instinto"],
  "createdAt": "2023-07-01T10:00:00.000Z",
  "updatedAt": "2023-07-01T10:00:00.000Z"
}
```

## Requisitos

- Node.js 16+
- MongoDB Community Server 4.4+
- MongoDB Compass (recomendado para gestión visual)
- npm 8+

## Tecnologías

- **Backend**: Express.js, Node.js
- **Base de datos**: MongoDB, Mongoose
- **Documentación**: Swagger/OpenAPI
- **Archivos**: Multer (subida de imágenes)
- **Otros**: CORS, Dotenv
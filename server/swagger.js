import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Dragon Ball",
      version: "1.0.0",
      description:
        "Documentación de la API para gestión de personajes de Dragon Ball",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3000}`,
        description: "Servidor de desarrollo",
      },
    ],
    components: {
      schemas: {
        Personaje: {
          type: "object",
          required: ["nombre", "raza", "poder"],
          properties: {
            _id: {
              type: "string",
              description: "ID autogenerado del personaje",
            },
            imagen: {
              type: "string",
              description: "Ruta de la imagen del personaje",
            },
            nombre: {
              type: "string",
              description: "Nombre del personaje",
            },
            raza: {
              type: "string",
              description: "Raza del personaje",
            },
            poder: {
              type: "number",
              description: "Nivel de poder del personaje",
            },
            transformaciones: {
              type: "array",
              items: {
                type: "string",
              },
              description: "Lista de transformaciones del personaje",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Fecha de creación del registro",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "Fecha de última actualización",
            },
          },
          example: {
            imagen: "/assets/images/personajes/goku.jpg",
            nombre: "Goku",
            raza: "Saiyajin",
            poder: 9000,
            transformaciones: ["Super Saiyajin", "SSJ Blue"],
          },
        },
        Error: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              description: "Indica si la solicitud fue exitosa",
            },
            message: {
              type: "string",
              description: "Mensaje descriptivo del error",
            },
            error: {
              type: "string",
              description: "Detalles técnicos del error (solo en desarrollo)",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Éxito - Operación completada correctamente",
        },
        201: {
          description: "Creado - Recurso creado exitosamente",
        },
        400: {
          description: "Solicitud incorrecta - Datos de entrada inválidos",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
        404: {
          description: "No encontrado - Recurso no existe",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
        500: {
          description: "Error interno del servidor",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
      },
    },
  },
  apis: ["./routes/*.js", "./controllers/*.js"], // Rutas donde Swagger buscará comentarios
};

const specs = swaggerJSDoc(options);

export const setupSwagger = (app) => {
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, {
      customCss: ".swagger-ui .topbar { display: none }",
      customSiteTitle: "API Dragon Ball - Documentación",
      customfavIcon: "/assets/favicon.ico",
    })
  );
};

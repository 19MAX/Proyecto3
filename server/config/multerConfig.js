import multer from "multer";
import path from "path";

// Configuración del storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "assets/images/personajes"); // Ruta donde se guardaran las imágenes
  },
  filename: (req, file, cb) => {
    // Generando un nombre único: timestamp + extensión original
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

// Filtrar solo imágenes
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const ext = path.extname(file.originalname).toLowerCase();
  const mimeType = allowedTypes.test(file.mimetype);

  if (mimeType && allowedTypes.test(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Solo se permiten imágenes (jpg, jpeg, png, gif)"));
  }
};

export const upload = multer({ storage, fileFilter });

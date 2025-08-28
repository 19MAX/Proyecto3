import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 8000;
export const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/dragonballz";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Conectado a MongoDB exitosamente");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    process.exit(1);
  }
};
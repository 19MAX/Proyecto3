import mongoose from "mongoose";

const personajeSchema = new mongoose.Schema(
  {
    imagen : {
        type: String,
        required: false
    },
    nombre: {
        type: String,
        required: true
    },
    raza: {
        type: String,
        required: true
    },
    poder: {
        type: Number,
        required: true
    },
    transformaciones: [String],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Personaje", personajeSchema);
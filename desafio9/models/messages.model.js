import { Schema, model } from "mongoose";

const MensajeSchema = new Schema(
  {
    id: { type: String, required: true },
    author: {
      id: { type: String, required: true },
      nombre: { type: String, required: true },
      apellido: { type: String, required: true },
      edad: { type: Number, required: true },
      alias: { type: String, required: true },
      avatar: { type: String, required: true },
    },
    text: { type: String, required: true },
    date: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

export const Mensaje = model("messages", MensajeSchema);

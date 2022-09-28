import { Schema, model } from "mongoose";

const ProductoSchema = new Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
  foto: { type: String, required: false },
});

export const Productos = model("productos", ProductoSchema);

import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 100
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        max: 5000
    },
    image: {
        type: String,
        max: 200
    }
})

export const ProductosModel = mongoose.model("products", Schema);
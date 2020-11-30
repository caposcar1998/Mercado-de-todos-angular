import * as mongoose from "mongoose";
import CarritoProducto from "./carritoProducto";

let carritoCarritoProducto = new mongoose.Schema({
    carritoProducto: CarritoProducto,
    idReferencia: {type: String}
})

const carritos = new mongoose.Schema({
    precio_final : Number,
    "ordenProductos.$": { type: carritoCarritoProducto },
    ordenProductos: { type: Array, defaultValue: [], optional: true }
})

const carrito = mongoose.model("Carrito", carritos)

export default carrito
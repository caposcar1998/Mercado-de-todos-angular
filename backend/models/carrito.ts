import * as mongoose from "mongoose";
import CarritoProducto from "./carritoProducto";

let carritoOrdenes = new mongoose.Schema({
    carritoProducto: String,
    idReferencia: String
})

const carritos = new mongoose.Schema({
    precio_final : Number,
    "ordenProductos.$": { type: carritoOrdenes },
    ordenProductos: { type: Array, defaultValue: [], optional: true }
})

const carrito = mongoose.model("Carrito", carritos)

export default carrito
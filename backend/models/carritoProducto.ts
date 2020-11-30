import * as mongoose from "mongoose";
import Producto from "./producto";

let carritoProductoProducto = new mongoose.Schema({
    producto: Producto,
    idReferencia: {type: String}
})

const carritoProductos = new mongoose.Schema({
    unidades_compra : Number,
    precio_total : Number,
    "Producto.$": { type: carritoProductoProducto},
})

const carritoProducto = mongoose.model("CarritoProducto", carritoProductos)
export default carritoProducto
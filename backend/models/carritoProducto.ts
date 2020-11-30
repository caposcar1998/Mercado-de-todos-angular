import * as mongoose from "mongoose";
import Producto from "./producto";

const carritoProductos = new mongoose.Schema({
    unidades_compra : Number,
    precio_total : Number,
    idReferenciaProducto : String
})

const carritoProducto = mongoose.model("CarritoProducto", carritoProductos)
export default carritoProducto
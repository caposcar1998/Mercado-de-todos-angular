import * as mongoose from "mongoose";

const carritoProductos = new mongoose.Schema({
    unidades_compra : Number,
    precio_total : Number
})

const carritoProducto = mongoose.model("CarritoProducto", carritoProductos)
export default carritoProducto
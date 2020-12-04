import * as mongoose from "mongoose";
import Producto from "./producto";

const carritoProductos = new mongoose.Schema({
    unidades_compra : {type:Number},
    precio_total : {type:Number},
    idReferenciaProducto : {type:String}
})

const carritoProducto = mongoose.model("CarritoProducto", carritoProductos)
export default carritoProducto
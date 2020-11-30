import * as mongoose from "mongoose";

const productos = new mongoose.Schema({
    nombre : String,
    precio : Number,
    presentacion : String,
    costo_envio : Number,
    dias_envio : Number,
    unidades_disp : Number,
    ubicacion : String,
    fecha_exp: Date,
    descrip : String,
    img_prod : URL
})

const producto = mongoose.model("Producto", productos)
export default producto
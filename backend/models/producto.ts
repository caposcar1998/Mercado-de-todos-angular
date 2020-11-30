import * as mongoose from "mongoose";

const productos = new mongoose.Schema({
    nombre : {type: String},
    precio : {type: Number},
    presentacion : {type: String},
    costo_envio : {type : Number},
    dias_envio : {type : Number},
    unidades_disp : {type : Number},
    ubicacion : {type: String},
    fecha_exp: {type: Date},
    descrip : {type: String},
    img_prod : {type: String},
});

const producto = mongoose.model("Producto", productos);
export default producto
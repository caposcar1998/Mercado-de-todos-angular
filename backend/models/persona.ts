import * as mongoose from "mongoose";
import Catalogo from "./catalogo";
import Carrito from "./carrito";
import Historial from "./historial";


const personas = new mongoose.Schema({
    nombre : {type :String},
    ciudad: {type: String},
    telefono : {type: Number},
    domicilio : {type: String},
    correo : {type:String},
    contraseña : {type:String},
    vendedor : {type: Boolean},
    comprador: {type:Boolean},
    idReferenciaCarrito : {type:String},
    idReferenciaCatalogo : {type:String},
    idReferenciaHistorial :{type:String}
})

const persona = mongoose.model("Persona", personas)
export default persona
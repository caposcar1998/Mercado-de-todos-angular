import * as mongoose from "mongoose";
import Catalogo from "./catalogo";
import Carrito from "./carrito";
import Historial from "./historial";


const personas = new mongoose.Schema({
    nombre : String,
    ciudad: String,
    telefono : Number,
    domicilio : String,
    correo : String,
    contraseña : String,
    vendedor : Boolean,
    comprador: Boolean,
    idReferenciaCarrito : String,
    idReferenciaCatalogo : String,
    idReferenciaHistorial :String
})

const persona = mongoose.model("Persona", personas)
export default persona
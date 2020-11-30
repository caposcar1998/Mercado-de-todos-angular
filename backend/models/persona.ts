import * as mongoose from "mongoose";
import Catalogo from "./catalogo";
import Carrito from "./carrito";

let catalogoPersona = new mongoose.Schema({
    catalogo: Catalogo,
    idReferencia: {type: String}
})

let carritoPersona = new mongoose.Schema({
    carrito: Carrito,
    idReferencia: {type: String}
})

const personas = new mongoose.Schema({
    nombre : String,
    ciudad: String,
    telefono : Number,
    domicilio : String,
    correo : String,
    contraseña : String,
    vendedor : Boolean,
    comprador: Boolean,
    "catalogoPersona.$": { type: catalogoPersona },
    "carritoPersona.$": { type: carritoPersona }
})

const persona = mongoose.model("Persona", personas)
export default persona
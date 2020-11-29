import * as mongoose from "mongoose";

const personas = new mongoose.Schema({
    nombre : String,
    ciudad: String,
    telefono : Number,
    domicilio : String,
    correo : String,
    contraseña : String,
    vendedor : Boolean,
    comprador: Boolean
})

const persona = mongoose.model("Persona", personas)
export default persona
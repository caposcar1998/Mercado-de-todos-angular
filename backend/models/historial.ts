import * as mongoose from "mongoose";
import Producto from "./producto";

let productoHistorial = new mongoose.Schema({
    producto: String,
    idReferencia: String
})

const historiales = new mongoose.Schema({
    idReferenciaPersona : String,
    "productosHistorial.$": { type: productoHistorial },
    productosHistorial: { type: Array, defaultValue: [], optional: true }
})


const historial = mongoose.model("Historial", historiales)
export default historial


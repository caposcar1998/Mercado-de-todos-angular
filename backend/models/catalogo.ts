import * as mongoose from "mongoose";
import Producto from "./producto";

let catalogoProducto = new mongoose.Schema({
    producto: Producto,
    idReferencia: {type: String}
})

const catalogos = new mongoose.Schema({
    "catalogoProducto.$": { type: catalogoProducto },
    catalogoProductos: { type: Array, defaultValue: [], optional: true }
})


const catalogo = mongoose.model("Catalogo", catalogos)
export default catalogo


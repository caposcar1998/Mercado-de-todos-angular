import * as mongoose from "mongoose";

const pruebas = new mongoose.Schema({
    nombre : String,
    nivelDePapi: Number
})

const prueba = mongoose.model("Prueba", pruebas)
export default prueba
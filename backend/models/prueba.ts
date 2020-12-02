import * as mongoose from "mongoose";

const prueba = new mongoose.Schema({
    nombre : String,
    nivelDePapi: Number
})

const Prueba = mongoose.model("prueba", prueba)
export default Prueba
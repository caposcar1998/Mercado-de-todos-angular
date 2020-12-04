import * as mongoose from "mongoose";

const prueba = new mongoose.Schema({
    nombre : {type:String},
    nivelDePapi: {type:Number}
})

const Prueba = mongoose.model("prueba", prueba)
export default Prueba
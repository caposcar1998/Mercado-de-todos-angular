import * as mongoose from "mongoose";

const carritos = new mongoose.Schema({
    precio_final : Number
})

const carrito = mongoose.model("Carrito", carritos)
export default carrito
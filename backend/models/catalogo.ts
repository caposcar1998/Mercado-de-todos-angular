import * as mongoose from "mongoose";

const catalogos = new mongoose.Schema({
    num_publicaciones : Number
})

const catalogo = mongoose.model("Catalogo", catalogos)
export default catalogo
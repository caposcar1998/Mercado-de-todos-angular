import * as moongose from "mongoose";

async function setMongo(): Promise <any>{

    const uriMongo = "mongodb+srv://caposcar:caposcar@mercadodetodos.iwjiu.mongodb.net/MercadoDeTodos?retryWrites=true&w=majority";
    moongose.Promise = global.Promise;
    moongose.set("useCreateIndex",true)
    moongose.set("debug",true)
    moongose.set("useNewUrlParser",true)
    moongose.set("useFindAndModify",false)
    moongose.set("useUnifiedTopology",true)
    await moongose.connect(uriMongo)
    console.log("me conecte ")

}

export default setMongo;
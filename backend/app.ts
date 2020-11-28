import * as express from "express";
import * as morgan from "morgan";
import setMongo, * as mongo from "./mongo";
import setRoutes  from "./routes";

const app = express();

app.set("port", 3000);
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan("dev"))

async function main(): Promise<any>{
    try {
        await setMongo();
        setRoutes(app); 
        app.listen(app.get("port"),()=>console.log("back en 3000"))    
    } catch (error) {
        console.error(error)
    }
    
}


main();

export {main}

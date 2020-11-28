import * as express from "express";
import PruebaController from "./controllers/pruebaController"
function setRoutes(app): void{

    const pruebaController = new PruebaController
    const router = express.Router();

    router.route("/prueba").get(pruebaController.getAll);
    router.route("/prueba/insertar").get(pruebaController.insert);

    app.use("/api", router);
}

export default setRoutes;
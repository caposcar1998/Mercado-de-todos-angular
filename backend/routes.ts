import * as express from "express";
import PruebaController from "./controllers/pruebaController"
import PersonaController from "./controllers/personaController"
import ProductoController from "./controllers/productoController"
import CarritoProductoController from "./controllers/carritoProductoController"
import CarritoController from "./controllers/carritoController"
import CatalogoController from "./controllers/catalogoController"
import HistorialController from "./controllers/historialController"
function setRoutes(app): void{

    const pruebaController = new PruebaController
    const personaController = new PersonaController
    const productoController = new ProductoController
    const carritoProductoController = new CarritoProductoController
    const carritoController = new CarritoController
    const catalogoController = new CatalogoController
    const historialController = new HistorialController
    const router = express.Router();

    router.route("/prueba").get(pruebaController.getAll);
    router.route("/prueba/insertar").get(pruebaController.insert);
    router.route("/persona").get(personaController.getAll);
    router.route("/persona/insertar").get(personaController.insert);
    router.route("/producto").get(productoController.getAll);
    router.route("/producto/insertar").get(productoController.insert);
    router.route("/carritoProducto").get(carritoProductoController.getAll);
    router.route("/carritoProducto/insertar").get(carritoProductoController.insert);
    router.route("/carrito").get(carritoController.getAll);
    router.route("/carrito/insertar").get(carritoController.insert);
    router.route("/catalogo").get(catalogoController.getAll);
    router.route("/catalogo/insertar").get(catalogoController.insert);
    router.route("/historial").get(historialController.getAll);
    router.route("/historial/insertar").get(historialController.insert);

    app.use("/api", router);
}

export default setRoutes;
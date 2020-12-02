import * as express from "express";
import PruebaController from "./controllers/pruebaController"
import PersonaController from "./controllers/personaController"
import ProductoController from "./controllers/productoController"
import CarritoProductoController from "./controllers/carritoProductoController"
import CarritoController from "./controllers/carritoController"
import CatalogoController from "./controllers/catalogoController"
import HistorialController from "./controllers/historialController"

var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
function setRoutes(app): void{

    const pruebaController = new PruebaController
    const personaController = new PersonaController
    const productoController = new ProductoController
    const carritoProductoController = new CarritoProductoController
    const carritoController = new CarritoController
    const catalogoController = new CatalogoController
    const historialController = new HistorialController
    const router = express.Router();

    //Prueba
    router.route("/prueba").get(pruebaController.getAll);
    router.route("/prueba/insertar").post(pruebaController.insert);
    router.route("/prueba/count").get(pruebaController.count);
    router.route("/prueba/:id").get(pruebaController.get);
    router.route("/prueba/:id").put(pruebaController.update);
    router.route("/prueba/:id").delete(pruebaController.delete);


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


    

    router.use((req, res, next) => {
        res.set("Access-Control-Allow-Origin", "*");
        res.set(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );
        if (req.method === "OPTIONS") {
          res.set(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Authorization"
          );
          res.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
        }
        next();
        }); //funcion habilita el middleware

        var jwtCheck = jwt({
          secret: jwks.expressJwtSecret({
              cache: true,
              rateLimit: true,
              jwksRequestsPerMinute: 5,
              jwksUri: 'https://dev-zglcmhno.us.auth0.com/.well-known/jwks.json'
        }),
        audience: 'http://localhost:3000/',
        issuer: 'https://dev-zglcmhno.us.auth0.com/',
        algorithms: ['RS256']
    });
    

      
    app.use(jwtCheck)
    app.use("/api", router);
    
}

export default setRoutes;
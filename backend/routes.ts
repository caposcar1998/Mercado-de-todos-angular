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
var cors = require('cors');
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

    //Persona
    router.route("/persona").get(personaController.getAll);
    router.route("/persona/insertar").post(personaController.insert);
    router.route("/persona/count").get(personaController.count);
    router.route("/persona/isComprador").get(personaController.getIsComprador);
    router.route("/persona/isVendedor").get(personaController.getIsVendedor);
    router.route("/persona/traerId").get(personaController.getId);
    router.route("/persona/:id").get(personaController.get);
    router.route("/persona/:id").put(personaController.update);
    router.route("/persona/:id").delete(personaController.delete);
    router.route("/persona/:id").post(personaController.setBasicinfo);

    //Producto
    router.route("/producto").get(productoController.getAll);
    router.route("/producto/insertar").post(productoController.insert);
    router.route("/producto/count").get(productoController.count);
    router.route("/producto/search").get(productoController.getNombre);
    router.route("/producto/comprar").put(productoController.buyprod);
    router.route("/producto/:id").get(productoController.get);
    router.route("/producto/:id").put(productoController.update);
    router.route("/producto/:id").delete(productoController.delete);

    //CarritoProducto
    router.route("/carritoProducto").get(carritoProductoController.getAll);
    router.route("/carritoProducto/insertar").post(carritoProductoController.insert);
    router.route("/carritoProducto/count").get(carritoProductoController.count);
    router.route("/carritoProducto/:id").get(carritoProductoController.get);
    router.route("/carritoProducto/:id").put(carritoProductoController.update);
    router.route("/carritoProducto/:id").delete(carritoProductoController.delete);

    //Carrito
    router.route("/carrito").get(carritoController.getAll);
    router.route("/carrito/insertar").post(carritoController.insert);
    router.route("/carrito/count").get(carritoController.count);
    router.route("/carrito/:id").get(carritoController.get);
    router.route("/carrito/:id").put(carritoController.update);
    router.route("/carrito/:id").delete(carritoController.delete);

    //Catalogo
    router.route("/catalogo").get(catalogoController.getAll);
    router.route("/catalogo/insertar").post(catalogoController.insert);
    router.route("/catalogo/count").get(catalogoController.count);
    router.route("/catalogo/:id").get(catalogoController.get);
    router.route("/catalogo/:id").put(catalogoController.update);
    router.route("/catalogo/:id").delete(catalogoController.delete);

    //Historial
    router.route("/historial").get(historialController.getAll);
    router.route("/historial/insertar").post(historialController.insert);
    router.route("/historial/count").get(historialController.count);
    router.route("/historial/:id").get(historialController.get);
    router.route("/historial/:id").put(historialController.update);
    router.route("/historial/:id").delete(historialController.delete);


    

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
    app.use(cors());
    app.use("/api", router);
    
}

export default setRoutes;
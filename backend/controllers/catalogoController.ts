import Catalogo from "../models/catalogo"

class CatalogoController{
    getAll = async (req, res) => {
        let statusCode =400;
        try {
          const catalogos = await Catalogo.find() 
          res.status(200).json(catalogos)
        } catch (error) {
            if(!error.statusCode){
                error.statusCode=500;
              }else if (error.statusCode == 400){
                return res.status(statusCode).json({error: error.message})
              } 
              return res.status(error.statusCode).json({error: error.message})
        }
    }

    insert = async(req, res) => {
        let statusCode = 304;
        try {
            const cat = await new Catalogo (req.body).save();
            res.status(201).json(cat)
        } catch (error) {
            if(!error.statusCode){
                error.statusCode=500;
              }else if (error.statusCode == 304){
                return res.status(statusCode).json({error: error.message})
              } 
              return res.status(error.statusCode).json({error: error.message})
        }
    }

    count = async (req, res) => {
        let statusCode = 400;
        try {
          const count = await Catalogo.count();
          res.status(200).json(count);
        } catch (error) {
            if(!error.statusCode){
                error.statusCode=500;
              }else if (error.statusCode == 400){
                return res.status(statusCode).json({error: error.message})
              } 
              return res.status(error.statusCode).json({error: error.message})
        }
      }

      // Get by id
    get = async (req, res) => {
        let statusCode = 404;
        try {
        const obj = await Catalogo.findOne({ _id: req.params.id });
        res.status(200).json(obj);
        } catch (error) {
            if(!error.statusCode){
                error.statusCode=500;
              }else if (error.statusCode == 404){
                return res.status(statusCode).json({error: error.message})
              } 
              return res.status(error.statusCode).json({error: error.message})
        }
    }

        // Update by id
    update = async (req, res) => {
        let statusCode = 304;
        try {
        await Catalogo.findOneAndUpdate({ _id: req.params.id }, req.body);
        res.sendStatus(200);
        } catch (error) {
            if(!error.statusCode){
                error.statusCode=500;
              }else if (error.statusCode == 304){
                return res.status(statusCode).json({error: error.message})
              } 
              return res.status(error.statusCode).json({error: error.message})
        }
    }

        // Delete by id
    delete = async (req, res) => {
        let statusCode = 304;
        try {
        await Catalogo.findOneAndRemove({ _id: req.params.id });
        res.sendStatus(200);
        } catch (error) {
            if(!error.statusCode){
                error.statusCode=500;
              }else if (error.statusCode == 304){
                return res.status(statusCode).json({error: error.message})
              } 
              return res.status(error.statusCode).json({error: error.message})
        }
    }

    addProduct = async (req, res) => {
      let statusCode = 404;
      const newProducto = {producto : "Toronja",idReferencia : "5fc6f8d8d14dcc1950c94e78"}
      var newCatalogo = {idReferenciaPersona:"5fc9c11f9240792ecc29225f",catalogoProductos:[]} 
      try {
          if (await Catalogo.findOne({idReferenciaPersona: "5fc9c11f9240792ecc29225f"}) == null){
            new Catalogo (newCatalogo).save();
          }
          await Catalogo.updateOne({idReferenciaPersona: "5fc9c11f9240792ecc29225f"},{ $push: {catalogoProductos: newProducto}});
          res.sendStatus(200); 
      } catch (error) {
          if(!error.statusCode){
              error.statusCode=500;
            }else if (error.statusCode == 404){
              return res.status(statusCode).json({error: error.message})
            } 
              return res.status(error.statusCode).json({error: error.message})
          }
    }

}

export default CatalogoController
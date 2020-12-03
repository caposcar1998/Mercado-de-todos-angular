import Producto from "../models/producto"

class ProductoController{
    getAll = async (req, res) => {
        let statusCode =400;
        try {
          const productos = await Producto.find() 
          res.status(200).json(productos)
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
            const prod = await new Producto (req.body).save();
            res.status(201).json(prod)
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
          const count = await Producto.count();
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

      // Get by name
    getNombre = async (req, res) => {
        let statusCode = 404;
        try {
        const obj = await Producto.find({nombre : req.query.nombre},{});
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

      // Get by id
      get = async (req, res) => {
        let statusCode = 404;
        try {
        const obj = await Producto.findOne({ _id: req.params.id });
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
        await Producto.findOneAndUpdate({ _id: req.params.id }, req.body);
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
        await Producto.findOneAndRemove({ _id: req.params.id });
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
}

export default ProductoController
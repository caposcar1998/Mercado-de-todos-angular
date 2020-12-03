import Carrito from "../models/carrito"

class CarritoController{
    getAll = async (req, res) => {
        let statusCode =400;
        try {
          const carritos = await Carrito.find() 
          res.status(200).json(carritos)
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
            const cart = await new Carrito (req.body).save();
            res.status(201).json(cart)
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
          const count = await Carrito.count();
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
        const obj = await Carrito.findOne({ _id: req.params.id });
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
        await Carrito.findOneAndUpdate({ _id: req.params.id }, req.body);
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
        await Carrito.findOneAndRemove({ _id: req.params.id });
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

export default CarritoController
import Prueba from "../models/prueba";

class PruebaController{
    getAll = async (req, res) => {
        let statusCode =400;
        try {
          const pruebas = await Prueba.find({} ) 
          res.status(200).json(pruebas)
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
            const pru = await new Prueba (req.body).save();
            res.status(201).json(pru)
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
          const count = await Prueba.count();
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
        const obj = await Prueba.findOne({ _id: req.params.id });
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
        await Prueba.findOneAndUpdate({ _id: req.params.id }, req.body);
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
        await Prueba.findOneAndRemove({ _id: req.params.id });
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

export default PruebaController
import Persona from "../models/persona"

class PersonaController{
    getAll = async (req, res) => {
      let statusCode =400;
        try {
          const personas = await Persona.find()
          res.status(200).json(personas)
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
            const per = await new Persona (req.body).save();
            res.status(201).json(per)
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
          const count = await Persona.count();
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
        const obj = await Persona.findOne({ _id: req.params.id });
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

      // Get vendedorBool
      getIsVendedor = async (req, res) => {
        let statusCode = 404;
        try {
        const obj = await Persona.find({ nombre: req.query.nombre},{vendedor : 1});
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
    
      // Get compradorBool
      getIsComprador = async (req, res) => {
        let statusCode = 404;
        try {
        const obj = await Persona.find({ nombre: req.query.nombre},{comprador : 1});
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
    //Get id by mail
    getId = async (req, res) => {
        let statusCode = 404;
        try {
        const obj = await Persona.find({correo : req.query.correo},{_id : 1, nombre : 1});
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
        await Persona.findOneAndUpdate({ _id: req.params.id }, req.body);
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
        await Persona.findOneAndRemove({ _id: req.params.id });
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

export default PersonaController
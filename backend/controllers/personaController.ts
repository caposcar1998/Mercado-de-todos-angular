import Persona from "../models/persona"

class PersonaController{
    getAll = async (req, res) => {
        try {
          const personas = await Persona.find() 
          res.status(200).json(personas)
        } catch (error) {
            return res.status(400).json({error: error.message})
        }
    }

    insert = async(req, res) => {
        try {
            const per = await new Persona (req.body).save();
            res.status(201).json(per)
        } catch (error) {
            
        }
    }
    
    count = async (req, res) => {
        try {
          const count = await Persona.count();
          res.status(200).json(count);
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
      }

      // Get by id
    get = async (req, res) => {
        try {
        const obj = await Persona.findOne({ _id: req.params.id });
        res.status(200).json(obj);
        } catch (err) {
        return res.status(500).json({ error: err.message });
        }
    } 

      // Get vendedorBool
      getIsVendedor = async (req, res) => {
        try {
        const obj = await Persona.find({ nombre: req.query.nombre},{vendedor : 1});
        res.status(200).json(obj);
        } catch (err) {
        return res.status(500).json({ error: err.message });
        }
    }

    
      // Get compradorBool
      getIsComprador = async (req, res) => {
        try {
        const obj = await Persona.find({ nombre: req.query.nombre},{comprador : 1});
        res.status(200).json(obj);
        } catch (err) {
        return res.status(500).json({ error: err.message });
        }
    }

        // Update by id
    update = async (req, res) => {
        try {
        await Persona.findOneAndUpdate({ _id: req.params.id }, req.body);
        res.sendStatus(200);
        } catch (err) {
        return res.status(400).json({ error: err.message });
        }
    }

        // Delete by id
    delete = async (req, res) => {
        try {
        await Persona.findOneAndRemove({ _id: req.params.id });
        res.sendStatus(200);
        } catch (err) {
        return res.status(400).json({ error: err.message });
        }
    }
}

export default PersonaController
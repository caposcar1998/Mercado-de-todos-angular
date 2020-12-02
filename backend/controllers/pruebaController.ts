import Prueba from "../models/prueba";

class PruebaController{
    getAll = async (req, res) => {
        try {
          const pruebas = await Prueba.find({} ) 
          res.status(200).json(pruebas)
        } catch (error) {
            return res.status(400).json({error: error.message})
        }
    }

    insert = async(req, res) => {
        try {
            const pru = await new Prueba (req.body).save();
            res.status(201).json(pru)
        } catch (error) {
            
        }
    }

    count = async (req, res) => {
        try {
          const count = await Prueba.count();
          res.status(200).json(count);
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
      }

      // Get by id
    get = async (req, res) => {
        try {
        const obj = await Prueba.findOne({ _id: req.params.id });
        res.status(200).json(obj);
        } catch (err) {
        return res.status(500).json({ error: err.message });
        }
    }

        // Update by id
    update = async (req, res) => {
        try {
        await Prueba.findOneAndUpdate({ _id: req.params.id }, req.body);
        res.sendStatus(200);
        } catch (err) {
        return res.status(400).json({ error: err.message });
        }
    }

        // Delete by id
    delete = async (req, res) => {
        try {
        await Prueba.findOneAndRemove({ _id: req.params.id });
        res.sendStatus(200);
        } catch (err) {
        return res.status(400).json({ error: err.message });
        }
    }

}

export default PruebaController
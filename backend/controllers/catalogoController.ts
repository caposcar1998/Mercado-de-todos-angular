import Catalogo from "../models/catalogo"

class CatalogoController{
    getAll = async (req, res) => {
        try {
          const catalogos = await Catalogo.find() 
          res.status(200).json(catalogos)
        } catch (error) {
            return res.status(400).json({error: error.message})
        }
    }

    insert = async(req, res) => {
        try {
            const cat = await new Catalogo (req.body).save();
            res.status(201).json(cat)
        } catch (error) {
            
        }
    }

    count = async (req, res) => {
        try {
          const count = await Catalogo.count();
          res.status(200).json(count);
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
      }

      // Get by id
    get = async (req, res) => {
        try {
        const obj = await Catalogo.findOne({ _id: req.params.id });
        res.status(200).json(obj);
        } catch (err) {
        return res.status(500).json({ error: err.message });
        }
    }

        // Update by id
    update = async (req, res) => {
        try {
        await Catalogo.findOneAndUpdate({ _id: req.params.id }, req.body);
        res.sendStatus(200);
        } catch (err) {
        return res.status(400).json({ error: err.message });
        }
    }

        // Delete by id
    delete = async (req, res) => {
        try {
        await Catalogo.findOneAndRemove({ _id: req.params.id });
        res.sendStatus(200);
        } catch (err) {
        return res.status(400).json({ error: err.message });
        }
    }
}

export default CatalogoController
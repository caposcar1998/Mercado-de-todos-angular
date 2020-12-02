import Carrito from "../models/carrito"

class CarritoController{
    getAll = async (req, res) => {
        try {
          const carritos = await Carrito.find() 
          res.status(200).json(carritos)
        } catch (error) {
            return res.status(400).json({error: error.message})
        }
    }

    insert = async(req, res) => {
        try {
            const cart = await new Carrito (req.body).save();
            res.status(201).json(cart)
        } catch (error) {
            
        }
    }
      
    count = async (req, res) => {
        try {
          const count = await Carrito.count();
          res.status(200).json(count);
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
      }

      // Get by id
    get = async (req, res) => {
        try {
        const obj = await Carrito.findOne({ _id: req.params.id });
        res.status(200).json(obj);
        } catch (err) {
        return res.status(500).json({ error: err.message });
        }
    }

        // Update by id
    update = async (req, res) => {
        try {
        await Carrito.findOneAndUpdate({ _id: req.params.id }, req.body);
        res.sendStatus(200);
        } catch (err) {
        return res.status(400).json({ error: err.message });
        }
    }

        // Delete by id
    delete = async (req, res) => {
        try {
        await Carrito.findOneAndRemove({ _id: req.params.id });
        res.sendStatus(200);
        } catch (err) {
        return res.status(400).json({ error: err.message });
        }
    }
}

export default CarritoController
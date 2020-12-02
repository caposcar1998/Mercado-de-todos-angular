import CarritoProducto from "../models/carritoProducto"

class CarritoProductoController{
    getAll = async (req, res) => {
        try {
          const carritoProductos = await CarritoProducto.find() 
          res.status(200).json(carritoProductos)
        } catch (error) {
            return res.status(400).json({error: error.message})
        }
    }

    insert = async(req, res) => {
        try {
            const carrProd = await new CarritoProducto (req.body).save();
            res.status(201).json(carrProd)
        } catch (error) {
            
        }
    }
  
    count = async (req, res) => {
        try {
          const count = await CarritoProducto.count();
          res.status(200).json(count);
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
      }

      // Get by id
    get = async (req, res) => {
        try {
        const obj = await CarritoProducto.findOne({ _id: req.params.id });
        res.status(200).json(obj);
        } catch (err) {
        return res.status(500).json({ error: err.message });
        }
    }

        // Update by id
    update = async (req, res) => {
        try {
        await CarritoProducto.findOneAndUpdate({ _id: req.params.id }, req.body);
        res.sendStatus(200);
        } catch (err) {
        return res.status(400).json({ error: err.message });
        }
    }

        // Delete by id
    delete = async (req, res) => {
        try {
        await CarritoProducto.findOneAndRemove({ _id: req.params.id });
        res.sendStatus(200);
        } catch (err) {
        return res.status(400).json({ error: err.message });
        }
    }
}

export default CarritoProductoController
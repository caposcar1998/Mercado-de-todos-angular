import carritoProducto from "../models/carritoProducto"

class CarritoProductoController{
    getAll = async (req, res) => {
        try {
          const carritoProductos = await carritoProducto.find() 
          res.status(200).json(carritoProductos)
        } catch (error) {
            return res.status(400).json({error: error.message})
        }
    }

    insert = async(req, res) => {
        try {
            const carrProd = await new carritoProducto (req.body).save();
            res.status(201).json(carrProd)
        } catch (error) {
            
        }
    }
}

export default CarritoProductoController
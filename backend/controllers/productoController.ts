import producto from "../models/producto"

class ProductoController{
    getAll = async (req, res) => {
        try {
          const productos = await producto.find() 
          res.status(200).json(productos)
        } catch (error) {
            return res.status(400).json({error: error.message})
        }
    }

    insert = async(req, res) => {
        try {
            const prod = await new producto (req.body).save();
            res.status(201).json(prod)
        } catch (error) {
            
        }
    }
}

export default ProductoController
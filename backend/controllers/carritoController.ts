import carrito from "../models/carrito"

class CarritoController{
    getAll = async (req, res) => {
        try {
          const carritos = await carrito.find() 
          res.status(200).json(carritos)
        } catch (error) {
            return res.status(400).json({error: error.message})
        }
    }

    insert = async(req, res) => {
        try {
            const cart = await new carrito (req.body).save();
            res.status(201).json(cart)
        } catch (error) {
            
        }
    }
}

export default CarritoController
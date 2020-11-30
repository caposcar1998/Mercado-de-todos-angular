import historial from "../models/historial"

class HistorialController{
    getAll = async (req, res) => {
        try {
          const historiales = await historial.find() 
          res.status(200).json(historiales)
        } catch (error) {
            return res.status(400).json({error: error.message})
        }
    }

    insert = async(req, res) => {
        try {
            const hist = await new historial (req.body).save();
            res.status(201).json(hist)
        } catch (error) {
            
        }
    }
}

export default HistorialController
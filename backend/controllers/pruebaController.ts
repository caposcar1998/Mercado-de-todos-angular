import prueba from "../models/prueba"

class PruebaController{
    getAll = async (req, res) => {
        try {
          const pruebas = await prueba.find() 
          res.status(200).json(pruebas)
        } catch (error) {
            return res.status(400).json({error: error.message})
        }
    }

    insert = async(req, res) => {
        try {
            const pru = await new prueba (req.body).save();
            res.status(201).json(pru)
        } catch (error) {
            
        }
    }
}

export default PruebaController
import persona from "../models/persona"

class PersonaController{
    getAll = async (req, res) => {
        try {
          const personas = await persona.find() 
          res.status(200).json(personas)
        } catch (error) {
            return res.status(400).json({error: error.message})
        }
    }

    insert = async(req, res) => {
        try {
            const per = await new persona (req.body).save();
            res.status(201).json(per)
        } catch (error) {
            
        }
    }
}

export default PersonaController
import catalogo from "../models/catalogo"

class CatalogoController{
    getAll = async (req, res) => {
        try {
          const catalogos = await catalogo.find() 
          res.status(200).json(catalogos)
        } catch (error) {
            return res.status(400).json({error: error.message})
        }
    }

    insert = async(req, res) => {
        try {
            const cat = await new catalogo (req.body).save();
            res.status(201).json(cat)
        } catch (error) {
            
        }
    }
}

export default CatalogoController
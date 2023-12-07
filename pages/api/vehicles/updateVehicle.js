import connect from '../../../utils/database'

export default async function handler(req, res){

    try {
        const {db} = await connect()

        const vehicle = {
            placa: req.body.placa,
            cor: req.body.cor,
            modelo: req.body.modelo,
            consumo: req.body.consumo,
            categoria: req.body.categoria
        }
    
        const response = await db.collection('vehicles').update({"placa":vehicle.placa},vehicle)
    
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
   
}
import connect from '../../../utils/database'

export default async function handler(req, res){

    req.body.cor = `bg-${req.body.cor}-500`

    try {
        const {db} = await connect()

        const vehicle = {
            placa: req.body.placa,
            cor: req.body.cor,
            modelo: req.body.modelo,
            consumo: req.body.consumo,
            categoria: req.body.categoria
        }
    
        const response = await db.collection('vehicles').insertOne(vehicle)
    
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
   
}
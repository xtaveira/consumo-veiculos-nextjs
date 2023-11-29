import { getVehicles } from "../../../lib/mongo/vehicles";

const handler = async(req, res) => {
    if(req.method === 'GET') {
        try {
            const { vehicles, error} = await getVehicles()
            if(error) throw new Error(error)

            return res.status(200).json({vehicles})
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }

    res.setHeader('Allor', ['GET'])
    res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler
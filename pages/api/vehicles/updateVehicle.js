import connect from "../../../utils/database";

export default async function handler(req, res) {
  try {
    const { db } = await connect();

    const vehicle = {
      placa: req.body.placa,
      cor: req.body.cor,
      modelo: req.body.modelo,
      consumo: req.body.consumo,
      categoria: req.body.categoria,
      km: req.body.km
    };

    // console.log(vehicle)

    const response = await db
      .collection("vehicles")
      .updateOne({ placa: vehicle.placa }, { $set: vehicle });

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
}

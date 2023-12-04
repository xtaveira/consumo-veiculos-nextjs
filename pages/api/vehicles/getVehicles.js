import connect from '../../../utils/database';

export default async function handler(req, res) {
  try {
    const { db } = await connect();

    const cursor = db.collection('vehicles').find();
    const response = await cursor.toArray();

    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

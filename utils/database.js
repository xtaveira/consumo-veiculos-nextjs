import { MongoClient } from "mongodb";

const url = process.env.MONGODB_URI;

const client = new MongoClient(url);

export default async function connect() {
  await client.connect();

  const db = client.db("consumos");

  return {db, client}
}

import { MongoClient } from "mongodb";

let db;

async function connectToDb(cb) {
  const client = new MongoClient(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.v4xc5rd.mongodb.net/?retryWrites=true&w=majority`
  );
  await client.connect();
  db = client.db("readers-blog-db");
  cb();
}

export { db, connectToDb };

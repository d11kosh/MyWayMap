import { MongoClient } from "mongodb";
import { MONGO_URI, DB_NAME } from "$env/static/private";

const client = new MongoClient(MONGO_URI);

export function start_mongo(): Promise<MongoClient> {
    console.log('Connecting to mongo...');
    return client.connect();
}

export default client.db(DB_NAME);
// mongodb.js

import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI ?? '';
const options: any = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI || process.env.MONGODB_URI === '') {
    throw new Error('Add Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') {
    const globalAny: any = global;
    if (!globalAny._mongoClientPromise) {
        client = new MongoClient(uri, options);
        globalAny._mongoClientPromise = client.connect();
    }
    clientPromise = globalAny._mongoClientPromise;
} else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;
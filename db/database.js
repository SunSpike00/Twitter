import { config } from '../config.js';
import MongoDb from 'mongodb'

let db;

export async function connectionDB(){
    return await MongoDb.MongoClient.connect(config.db.host).then((client) => db = client.db());
}

export function getUsers(){
    return db.collection("users");
}

export function getTweets(){
    return db.collection('tweets');
}


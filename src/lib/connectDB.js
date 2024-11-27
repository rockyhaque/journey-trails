import { MongoClient, ServerApiVersion } from "mongodb";
import { NextResponse } from "next/server";

let client;
let db;
export const connectDB = async () => {
    if (db) return db;
    try {
        if (!client) {
            const uri = `mongodb+srv://${process.env.NEXT_MONGODB_USER}:${process.env.NEXT_MONGODB_PASS}@cluster0.g2fbusk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
            const client = new MongoClient(uri, {
                serverApi: {
                    version: ServerApiVersion.v1,
                    strict: true,
                    deprecationErrors: true,
                }
            });


            // await client.connect();
        }
        db = client.db("journey-trails-flat");
        return db;

    } catch (error) {
        return NextResponse.json({ message: "something in wrong " })
    }
}
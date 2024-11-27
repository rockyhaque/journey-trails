// import { MongoClient, ServerApiVersion } from "mongodb";
// import { NextResponse } from "next/server";

// let client;
// let db;
// export const connectDB = async () => {
//     if (db) return db;
//     try {
//         if (!client) {
//             const uri = `mongodb+srv://${process.env.NEXT_MONGODB_USER}:${process.env.NEXT_MONGODB_PASS}@cluster0.g2fbusk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
//             const client = new MongoClient(uri, {
//                 serverApi: {
//                     version: ServerApiVersion.v1,
//                     strict: true,
//                     deprecationErrors: true,
//                 }
//             });


//             await client.connect();
//         }
//         db = client.db("journey-trails-flat");
//         return db;

//     } catch (error) {
//         return NextResponse.json({ message: "something in wrong " })
//     }
// }




import { MongoClient, ServerApiVersion } from "mongodb";
// import { NextResponse } from "next/server";

let client; // Global variable for MongoClient instance
let db; // Global variable for Database instance

export const connectDB = async () => {
  if (db) return db; // Return the cached database instance if already connected

  try {
    if (!client) {
      // Initialize MongoClient if not already done
      const uri = `mongodb+srv://${process.env.NEXT_MONGODB_USER}:${process.env.NEXT_MONGODB_PASS}@cluster0.g2fbusk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
      client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
      });

      await client.connect();
    }

    db = client.db("journey-trails-flat"); // Replace with your database name
    console.log("Connected to database:", db.databaseName); // Debug log
    return db; // Return the database instance
  } catch (error) {
    console.error("Database connection error:", error); // Log the connection error
    throw new Error("Database connection failed"); // Throw error to be caught in API
  }
};

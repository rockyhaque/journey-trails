import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";


// export const GET = async () => {
//     const db = await connectDB();
//     console.log("Connected to database:", db.databaseName);

//     const placesCollection = await db.collection('all-places');
//     try{
//         const places = await placesCollection.find().toArray();

//         console.log("Available collections:", placesCollection);
//         return NextResponse.json({places})
//     } catch(error){
//         console.log(error);
//         return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
//     }
// }



export const GET = async () => {
    try {
      const db = await connectDB(); // Await the resolved database object
      const placesCollection = db.collection("all-places"); // Access collection
      console.log("Collection fetched:", placesCollection); // Debug log
      const places = await placesCollection.find().toArray(); // Fetch all documents
      return NextResponse.json({ places }); // Return places in JSON response
    } catch (error) {
      console.error("Error in GET /api/all-places:", error); // Log error
      return NextResponse.json(
        { message: "Internal Server Error" },
        { status: 500 }
      ); // Return 500 response
    }
  };
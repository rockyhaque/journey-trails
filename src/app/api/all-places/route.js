import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";


export const GET = async () => {
    const db = await connectDB();
    console.log("Connected to database:", db.databaseName);

    const placesCollection = await db.collection('all-places');
    try{
        const places = await placesCollection.find().toArray();

        console.log("Available collections:", placesCollection);
        return NextResponse.json({places})
    } catch(error){
        console.log(error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}
import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

//? GET ALL PLACES
export const GET = async () => {
  try {
    const db = await connectDB();
    const placesCollection = db.collection("all-places");

    const places = await placesCollection.find().toArray();
    return NextResponse.json({ places });
  } catch (error) {
    console.error("Error in GET /api/all-places:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};

// ? POST NEW PLACES
export const POST = async (req) => {
  try {
    const place = await req.json();
    const db = await connectDB();
    const placesCollection = db.collection("all-places");
    const result = await placesCollection.insertOne(place);
    return NextResponse.json({ result }, { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/all-places:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};

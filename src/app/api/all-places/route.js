import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const db = await connectDB();
    const placesCollection = db.collection("all-places");
    console.log("Collection fetched:", placesCollection);
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

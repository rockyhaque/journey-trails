import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

//? SINGLE PLACE LOAD
export const GET = async (req, { params }) => {
  const { id } = params;
  try {
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid ID format" },
        { status: 400 }
      );
    }
    const db = await connectDB();
    const placesCollection = db.collection("all-places");
    const place = await placesCollection.findOne({ _id: new ObjectId(id) });
    if (!place) {
      return NextResponse.json({ message: "Place not found" }, { status: 404 });
    }
    return NextResponse.json(place, { status: 200 });
  } catch (error) {
    console.error("Error in GET /api/all-places/[id]:", error);
    return NextResponse.json({ message: "Place not found" }, { status: 500 });
  }
};

//? UPDATE PLACES DATA
export const PUT = async (req, { params }) => {
  const { id } = params;
  const updates = await req.json();
  try {
    const db = await connectDB();
    const placesCollection = db.collection("all-places");
    const result = await placesCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updates }
    );
    if (result.matchedCount === 0) {
      return NextResponse.json({ message: "Place not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Place updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in PUT /api/all-places/[id]:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};

//? DELETE SINGLE PLACES
export const DELETE = async (req, { params }) => {
  const { id } = params;
  try {
    const db = await connectDB();
    const placesCollection = db.collection("all-places");
    const result = await placesCollection.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      return NextResponse.json({ message: "Place not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Place deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in DELETE /api/all-places/[id]:", error);
    return NextResponse.json(
      { message: "Places Server Error" },
      { status: 500 }
    );
  }
};

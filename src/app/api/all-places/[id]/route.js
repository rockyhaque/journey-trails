import connectDB from "@/lib/connectDB";
import AllPlaces from "@/models/AllPlaces";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

//? SINGLE PLACE LOAD
export const GET = async (req, { params }) => {
  const { id } = await params;
  try {
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid ID format" },
        { status: 400 }
      );
    }
    await connectDB();
    const place = await AllPlaces.findById(id);
    if (!place) {
      return NextResponse.json({ message: "Place not found" }, { status: 404 });
    }
    return NextResponse.json(place, { status: 200, place: place });
  } catch (error) {
    console.error("Error in GET /api/all-places/[id]:", error);
    return NextResponse.json({ message: "Place not found" }, { status: 500 });
  }
};

//? UPDATE PLACES DATA
export const PUT = async (req, { params }) => {
  const { id } = await params;
  const updates = await req.json();
  try {
    await connectDB();
    const updatedPlace = await AllPlaces.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!updatedPlace) {
      return NextResponse.json({ message: "Place not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Place updated successfully", place: updatedPlace },
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
  const { id } = await params;
  try {
    await connectDB();
    const deletedPlace = await AllPlaces.findByIdAndDelete(id);
    if (!deletedPlace) {
      return NextResponse.json({ message: "Place not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Place deleted successfully", success: true },
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

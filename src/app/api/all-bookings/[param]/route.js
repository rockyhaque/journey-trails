import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

//? GET Request: Get bookings by email
export const GET = async (req, { params }) => {
  const { param } = params;
  try {
    const db = await connectDB();
    const bookingsCollection = db.collection("all-bookings");
    const bookings = await bookingsCollection.find({ email: param }).toArray();
    if (bookings.length === 0) {
      return NextResponse.json(
        { message: "No bookings found for this email" },
        { status: 404 }
      );
    }
    return NextResponse.json(bookings, { status: 200 });
  } catch (error) {
    console.error("Error in GET /api/all-bookings/[param]:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};

//? DELETE Request: Delete booking by ID
export const DELETE = async (req, { params }) => {
  const { param } = params;
  try {
    const db = await connectDB();
    const bookingsCollection = db.collection("all-bookings");
    if (!ObjectId.isValid(param)) {
      return NextResponse.json(
        { message: "Invalid booking ID format" },
        { status: 400 }
      );
    }
    const result = await bookingsCollection.deleteOne({
      _id: new ObjectId(param),
    });
    if (result.deletedCount === 0) {
      return NextResponse.json(
        { message: "Booking not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Booking deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in DELETE /api/all-bookings/[param]:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};

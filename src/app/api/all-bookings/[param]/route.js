import connectDB from "@/lib/connectDB";
import AllBookings from "@/models/AllBookings";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

//? GET Request: Get bookings by email
export const GET = async (req, { params }) => {
  const { param } = await params;
  try {
    await connectDB();
    const bookings = await AllBookings.find({ email: param });
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
    await connectDB();
    const result = await AllBookings.deleteOne({ _id: param });
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

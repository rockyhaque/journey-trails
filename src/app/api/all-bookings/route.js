import connectDB from "@/lib/connectDB";
import AllBookings from "@/models/AllBookings";
import { NextResponse } from "next/server";

//? ADD NEW BOOKING
export const POST = async (request) => {
  const body = await request.json();
  try {
    await connectDB();
    const newBooking = new AllBookings(body);
    const bookings = await newBooking.save();
    return NextResponse.json(
      { message: "BOOKING ADDED", bookings },
      { status: 200 }
    );
  } catch (err) {
    console.log(err.message);
    return NextResponse.json(
      { message: "Something went wrong", err },
      { status: 500 }
    );
  }
};

//? GET ALL BOOKINGS
export const GET = async () => {
  try {
    await connectDB();
    const bookings = await AllBookings.find({});
    return NextResponse.json({ bookings }, { status: 200 });
  } catch (err) {
    console.error("Error GETTING BOOKINGS:", err);
    return NextResponse.json(
      { message: "Something went wrong", error: err.message },
      { status: 500 }
    );
  }
};

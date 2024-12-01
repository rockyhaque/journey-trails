import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

//? ADD NEW BOOKING
export const POST = async (request) => {
  const book = await request.json();
  try {
    const db = await connectDB();
    const bookingsCollection = db.collection("all-bookings");
    const res = await bookingsCollection.insertOne(book);
    return NextResponse.json({ message: "BOOKING ADDED" }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Something went wrong", err },
      { status: 500 }
    );
  }
};

//? GET ALL BOOKINGS
export const GET = async () => {
  try {
    const db = await connectDB();
    const bookingsCollection = db.collection("all-bookings");
    const bookings = await bookingsCollection.find({}).toArray();
    return NextResponse.json({ bookings }, { status: 200 });
  } catch (err) {
    console.error("Error GETTING BOOKINGS:", err);
    return NextResponse.json(
      { message: "Something went wrong", error: err.message },
      { status: 500 }
    );
  }
};

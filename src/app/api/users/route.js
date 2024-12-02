import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

// ? NEW CREATED USERS
export const POST = async (request) => {
  const newUser = await request.json();
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    const exixst = await userCollection.findOne({ email: newUser.email });
    if (exixst) {
      return NextResponse.json(
        { message: "User Alredy Exixst" },
        { status: 409 }
      );
    }
    await userCollection.insertOne({ ...newUser });
    return NextResponse.json({ message: "User Created" }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Something went wrong", err },
      { status: 500 }
    );
  }
};
// ? GET ALL USERS
export const GET = async () => {
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    const users = await userCollection.find({}).toArray();
    return NextResponse.json({ users }, { status: 200 });
  } catch (err) {
    console.error("Error fetching users:", err);
    return NextResponse.json(
      { message: "Something went wrong", error: err.message },
      { status: 500 }
    );
  }
};

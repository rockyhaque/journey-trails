import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Users from "@/models/Users";

//? UPDATE USER ROLE
export const PUT = async (req, { params }) => {
  const { id } = await params;
  const { role } = await req.json();
  try {
    await connectDB();
    const user = await Users.findByIdAndUpdate(id, { role }, { new: true });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "User role updated successfully", user },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in PUT /api/users/[id]:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 }
    );
  }
};

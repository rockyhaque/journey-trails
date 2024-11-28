import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";

export const POST = async (request) => {
  const newUser = await request.json();
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    const exixst = await userCollection.findOne({ email: newUser.email });
    if (exixst) {
      return Response.json({ message: "User Alredy Exixst" }, { status: 409 });
    }
    const hashedPassword = bcrypt.hashSync(newUser.password, 14);
    const res = await userCollection.insertOne({
      ...newUser,
      password: hashedPassword,
    });
    return Response.json({ message: "User Created" }, { status: 200 });
  } catch (err) {
    return Response.json(
      { message: "Something went wrong", err },
      { status: 500 }
    );
  }
};

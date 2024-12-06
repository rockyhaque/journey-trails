import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }
  try {
    await mongoose.connect(process.env.NEXT_MONGODB_URI);
    console.log("Connected to Journey-Trails Database");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw new Error("Failed to connect to MongoDB");
  }
};
export default connectDB;

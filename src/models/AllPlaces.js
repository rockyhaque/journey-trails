import mongoose from "mongoose";

const AllPlacesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide Place Title"],
      unique: true,
    },
    shortDescription: {
      type: String,
      required: [true, "Please provide Place Short Description"],
    },
    description: {
      type: String,
      required: [true, "Please provide Place Description"],
    },
    coverImage: {
      type: String,
      required: [true, "Please provide Place Image"],
      match: [/^https?:\/\/.+/, "Please provide a valid URL"],
    },
    location: {
      type: String,
      required: [true, "Please provide Place Location"],
    },
    peopleCountRange: {
      type: String,
      required: [true, "Please provide People Count"],
    },
    days: {
      type: Number,
      required: [true, "Please provide Tour Days"],
      min: [1, "Discount cannot be negative"],
    },
    discount: {
      type: String,
      required: [true, "Please provide Tour Discount"],
    },
    amount: {
      type: Number,
      required: [true, "Please provide Price"],
      min: [1, "Amount cannot be negative"],
    },
    isFeatured: {
      type: Boolean,
      required: [true, "Please Select Featured or Not"],
    },
  },
  { timestamps: true, collection: "all-places" }
);
const AllPlaces =
  mongoose.models.AllPlaces || mongoose.model("AllPlaces", AllPlacesSchema);

export default AllPlaces;

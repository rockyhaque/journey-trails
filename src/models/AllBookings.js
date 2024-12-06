import mongoose from "mongoose";

const AllBookingsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide Place Title"],
    },
    placeName: {
      type: String,
      required: [true, "Please provide Place Name"],
    },
    placeImage: {
      type: String,
      required: [true, "Please provide Place Image"],
    },
    price: {
      type: Number,
      required: [true, "Please provide Place Title"],
    },
    bookingDate: {
      type: Date,
      required: [true, "Please provide Booking Date"],
    },
    travelDate: {
      type: Date,
      required: [true, "Please provide Booking Date"],
    },
    name: {
      type: String,
      required: [true, "Please provide your name"],
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      validate: {
        validator: function (value) {
          return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
        },
        message: "{VALUE} is not a valid email",
      },
    },
    image: {
      type: String,
      required: [true, "Please provide User Image"],
    },
    status: {
      type: String,
      enum: {
        values: ["booked", "wish"],
        message: "{VALUE} is not valid, please provide a valid Status",
      },
      required: true,
    },
  },
  { timestamps: true, collection: "all-bookings" }
);

const AllBookings =
  mongoose.models.AllBookings ||
  mongoose.model("AllBookings", AllBookingsSchema);

export default AllBookings;

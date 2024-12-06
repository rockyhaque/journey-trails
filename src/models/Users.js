import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your name"],
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      unique: true,
      lowercase: true,
      validate: {
        validator: function (value) {
          return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
        },
        message: "{VALUE} is not a valid email",
      },
      immutable: true,
    },
    image: {
      type: String,
      required: [true, "Please provide your Image"],
      match: [/^https?:\/\/.+/, "Please provide a valid URL"],
    },
    role: {
      type: String,
      enum: {
        values: ["tourist", "admin"],
        message: "{VALUE} is not valid, please provide a valid role",
      },
      default: "tourist",
      required: true,
    },
  },
  { timestamps: true }
);

const Users = mongoose.models.Users || mongoose.model("Users", UsersSchema);

export default Users;

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter First Name"],
    },
    lastName: {
      type: String,
      required: [true, "Please enter Last Name"],
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    mob_number: {
      type: Number,
      required: [true, "Please enter Mobile Number"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

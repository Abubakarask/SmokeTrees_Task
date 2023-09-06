const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    streetAddress: {
      type: String,
      required: [true, "Please enter Street Address"],
    },
    city: {
      type: String,
      required: [true, "Please Enter city"],
    },
    state: {
      type: String,
      required: [true, "Please Enter state"],
    },
    postalCode: {
      type: Number,
      required: [true, "Please Enter PostalCode"],
    },
    country: {
      type: String,
      required: [true, "Please Enter country"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;

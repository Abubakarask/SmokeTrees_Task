const { logroute } = require("../logger/lgs");
const Address = require("../models/Address");
const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    logroute(req);
    // Extract user registration data from the request body
    const {
      firstName,
      lastName,
      email,
      mob_number,
      streetAddress,
      city,
      state,
      postalCode,
      country,
    } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
        code: "RESOURCE_EXISTS",
      });
    }

    // Create a new user
    const user = new User({
      firstName,
      lastName,
      email,
      mob_number,
    });

    // Create a new address associated with the user
    const address = new Address({
      streetAddress,
      city,
      state,
      postalCode,
      country,
      user: user._id,
    });

    // Save the user and address to the database
    await user.save();
    await address.save();

    res.status(201).json({
      success: true,
      message: "User registered and address stored successfully.",
      user,
      address,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: `Error: ${error.message}`,
    });
  }
};

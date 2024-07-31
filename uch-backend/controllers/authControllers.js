const { User, validate } = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const Counter = require("../models/Counter")
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const fs = require("fs");
const path = require("path");

// Controller method for user registration
exports.registerUser = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(409).send({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Get the next unique ID
    const counter = await Counter.findOneAndUpdate(
      { name: 'userId' },
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    );

    const uniqueId = counter.count;

    await new User({ ...req.body, password: hashedPassword, id: uniqueId }).save();
    res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

// Validation function for login data
const loginValidate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  return schema.validate(data);
};

// Controller method for user login
exports.loginUser = async (req, res) => {
  try {
    const { error } = loginValidate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    const { email, password } = req.body;
    let role = "user";
    let user;

    if (email === process.env.ADMIN_EMAIL) {
      // Compare the plain text password with the admin password from .env
      if (password !== process.env.ADMIN_PASSWORD) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
      role = "admin";
      user = { _id: "admin", username: "Admin" }; // Mock admin user object
    } else {
      user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
    }

    const token = jwt.sign({ _id: user._id, role }, process.env.JWT_SECRET); // Ensure this line uses the correct secret
    res.status(200).send({
      data: { token, username: user.username, role },
      message: "Login successful",
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


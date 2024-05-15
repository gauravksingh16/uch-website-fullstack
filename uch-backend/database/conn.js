const mongoose = require('mongoose');

require('dotenv').config(); // Load environment variables from .env file

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to database");
  } catch (error) {
    console.error("Could not connect to database", error);
  }
}

module.exports = connect;
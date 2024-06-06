require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connect = require("./database/conn.js");
const authrouter = require("./routes/authRoute.js");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.disable('x-powered-by');
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/api', authrouter);

connect()
  .then(() => {
    console.log("MongoDB connected");
    // Start your server
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connect = require("./database/conn.js");
const authRouter = require("./routes/authRoute.js");
const userRoute = require("./routes/userRoute.js");
const productRoute = require("./routes/productRoute.js");
const app = express();
const path = require('path');

// Middleware
app.use(cors());
app.use(express.json());
app.disable('x-powered-by');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api', authRouter);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

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

const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require("body-parser");

// Importing routes
const statusRoute = require("./routes/status");

const app = express();
const port = process.env.PORT || 3000;

// Listening to the server
app.listen(port);

// Connecting to the database
const MONGODB_URL = process.env.MONGODB_URI || "";

mongoose.connect(
  MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to the database!");
  }
);

// Middlewares
app.use(cors());
app.use(bodyParser.json()); // Adding a parser to convert any request body to json
app.use("/status", statusRoute); // Any time we hit /status we should use statusRoute


// Routes
app.get("/", (req, res) => {
  res.send("We are online baby! Porta's API v1.0");
});

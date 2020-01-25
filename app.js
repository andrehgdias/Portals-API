const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Importing routes
const postsRoute = require("./routes/posts");

const app = express();
const port = process.env.PORT || 3000;

// Listening to the server
app.listen(port);

// Connecting to the database
const MONGODB_URL = process.env.MONGODB_URI || "";

mongoose.connect(
  MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
//  () => {

//  }
);

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() {
    console.log("Connected to the database!");
});

// Middlewares
app.use(bodyParser.json()); // Adding a parser to convert any request body to json
app.use("/posts", postsRoute); // Any time we hit /posts we should use postsRoute

// Routes
app.get("/", (req, res) => {
  res.send("We are online baby! Porta's API v1.0");
});

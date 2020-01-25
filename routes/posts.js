const express = require("express");
const router = express.Router();
const Posts = require("../models/Posts");

router.get("/", (req, res) => {
  res.send("We are on posts baby!");
});

router.get("/status", (req, res) => {
  res.send("We are on posts STATUS baby!");
});

router.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;

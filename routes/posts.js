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
  const post = new Posts({
    title: req.body.title,
    description: req.body.description
  });

  post.save((err, post) => {
    // Create a promise to respond to our request after saving our req.body on the db
    if (err) res.json({ msg: "Erro ao tentar salvar os dados: ", err });

    res.json(post);
  });
});

module.exports = router;

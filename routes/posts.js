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

  post
    .save()
    .then(data => {
      // Create a promise to respond to our request after saving our req.body on the db
      res.json(data);
    })
    .catch(err => {
      res.json({ msg: "Erro ao tentar salvar os dados: ", err });
    });
});

module.exports = router;

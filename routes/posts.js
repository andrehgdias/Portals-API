const express = require("express");
const router = express.Router();
const Posts = require("../models/Posts");

router.get("/all", async (req, res) => {
  try {
    const posts = await Posts.find();
    res.json(posts);
  } catch (err) {
    res.json({ msg: "Erro ao tentar buscar os dados: ", err });
  }
});

router.get("/status", (req, res) => {
  res.send("We are on posts STATUS baby!");
});

router.post("/new", async (req, res) => {
  const post = new Posts({
    title: req.body.title,
    description: req.body.description
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ msg: "Erro ao tentar salvar os dados: ", err });
  }
});

module.exports = router;

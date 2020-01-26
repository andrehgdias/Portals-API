const express = require("express");
const router = express.Router();
const Player = require("../models/Player");

router.get("/all", async (req, res) => {
  try {
    const player = await Player.find();
    res.json(player);
  } catch (err) {
    res.json({ msg: "Erro ao tentar buscar os dados: ", err });
  }
});

router.get("/:playerKey", async (req, res) => {
  try {
    const player = await Player.findOne({ ket: req.params.playerKey });
    res.json(player);
  } catch (err) {
    res.json({ msg: "Erro ao tentar buscar os dados: ", err });
  }
});

router.delete("/:playerKey", async (req, res) => {
  try {
    const removedPlayer = await Player.deleteOne({ _id: req.params.playerKey });
    res.json(removedPlayer);
  } catch (err) {
    res.json({ msg: "Erro ao tentar deletar os dados: ", err });
  }
});

router.post("/new", async (req, res) => {
  const player = new Player({
    key: req.body.key,
    balance: req.body.balance
  });
  try {
    const savedPlayer = await player.save();
    res.json(savedPlayer);
  } catch (err) {
    res.json({ msg: "Erro ao tentar salvar os dados: ", err });
  }
});

router.patch("/:playerKey", async (req, res) => {
  try {
    const updatedPlayer = await Player.updateOne(
      { _id: req.params.playerKey },
      { $set: req.body }
    );
    res.json(updatedPlayer);
  } catch (err) {
    res.json({ msg: "Erro ao tentar atualizar os dados: ", err });
  }
});

module.exports = router;

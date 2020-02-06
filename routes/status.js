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
    const player = await Player.findOne({ key: req.params.playerKey });
    console.log("Player: ", player);
    res.json({code: 12, player: (player ? player : "null")});
  } catch (err) {
    res.json({ code: 22, msg: "Erro ao tentar buscar os dados: ", err });
  }
});

router.delete("/:playerKey", async (req, res) => {
  try {
    const removedPlayer = await Player.deleteOne({ key: req.params.playerKey });
    res.json(removedPlayer);
  } catch (err) {
    res.json({ msg: "Erro ao tentar deletar os dados: ", err });
  }
});

router.post("/new", async (req, res) => {
  console.log(req);
  const player = new Player({
    key: req.body.key,
    balance: req.body.balance,
    qtdExp: req.body.qtdExp,
    qtdEnergy: req.body.qtdEnergy,
    qtdBatteries: req.body.qtdBatteries
  });
  console.log(player);
  try {
    const savedPlayer = await player.save();
    res.json({code: 10, savedPlayer});
  } catch (err) {
    res.json({ code: 20, msg: "Erro ao tentar salvar os dados: ", err });
  }
});

router.put("/:playerKey", async (req, res) => {
  try {
    const updatedPlayer = await Player.updateOne(
      { key: req.params.playerKey },
      { $set: req.body }
    );
    res.json({code: 11, updatedPlayer});
  } catch (err) {
    res.json({ code: 21, msg: "Erro ao tentar atualizar os dados: ", err });
  }
});

module.exports = router;

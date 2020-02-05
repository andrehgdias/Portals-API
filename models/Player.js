const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true
  },
  balance: {
    type: Number,
    required: true
  },
  qtdExp: {
    type: Number,
    required: true
  },
  qtdEnergy: {
    type: Number,
    required: true
  },
  qtdBatteries: {
    type: Number,
    required: true
  },
  registrationDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Player", playerSchema);

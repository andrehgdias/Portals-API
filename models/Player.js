const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true
  },
  balance: {
    type: Number
  },
  qtdExp: {
    type: Number
  },
  qtdEnergy: {
    type: Number
  },
  qtdBatteries: {
    type: Number
  },
  registrationDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Player", playerSchema);

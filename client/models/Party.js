const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PartySchema = new Schema({
  day: {
    type: Date,
    trim: true,
  },
  guest: {
    type: Number,
    trim: true,
  },
  theme: {
    type: Number,
    trim: true,
  },
  menu: {
    type: Number,
    trim: true,
  },
});

const Party = mongoose.model("Party", PartySchema);

module.exports = Party;

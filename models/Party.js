const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PartySchema = new Schema({
  date: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  guest: {
    type: String,
    trim: true,
    // required: true,
  },
  characters: {
    type: String,
    trim: true,
    // required: true,
  },
  menu: {
    type: String,
    trim: true,
    // required: true,
  },
  note: {
    type: String,
    trim: true,
  },
  bookingDate: {
    type: Date,
    default: Date.now,
  },
});

const Party = mongoose.model("Party", PartySchema);

module.exports = Party;

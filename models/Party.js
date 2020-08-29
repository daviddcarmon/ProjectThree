const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PartySchema = new Schema({
  day: {
    type: Date,
    trim: true,
    required: true,
  },
  guest: {
    type: Number,
    trim: true,
    required: true,
  },
  theme: {
    type: String,
    trim: true,
    required: true,
  },
  menu: {
    type: String,
    trim: true,
    required: true,
  },
  note: {
    type: String,
    trim: true,
  },
  bookingDate: {
    type: Date,
    default: Date.now,
  },
  deleteDate: {
    type: Date,
    default: null,
  },
});

const Party = mongoose.model("Party", PartySchema);

module.exports = Party;

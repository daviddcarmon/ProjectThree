const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  characterDescription: {
    type: String,
    trim: true,
    required: true,
  },
  image: {
    type: String,
    trim: true,
    required: true,
  },
});

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;

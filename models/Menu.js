const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MenuSchema = new Schema({
  partyPackageName: {
    type: String,
    trim: true,
    required: true,
  },
  menuDescription: {
    type: String,
    trim: true,
    required: true,
  },
});

const Menu = mongoose.model("Menu", MenuSchema);

module.exports = Menu;

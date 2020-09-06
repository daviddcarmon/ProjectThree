let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/projectthree", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

let CharacterSeed = [
  {
    name: "Frodo Baggins",
    characterDescription: "Main Hobbit",
  },
  {
    name: "Bilbo Baggins",
    characterDescription: "Second Hobbit",
  },
];

db.Characters.deleteMany({})
  .then(() => db.Characters.collection.insertMany(CharacterSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

let MenuSeed = [
  {
    partyPackageName: "Gold",
    menuDescription: "main menu items",
  },
  {
    name: "Silver",
    characterDescription: "silver menu items",
  },
];

db.Menu.deleteMany({})
  .then(() => db.Menu.collection.insertMany(MenuSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

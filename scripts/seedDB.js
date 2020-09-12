let mongoose = require("mongoose");
let db = require("../models");
const { urlencoded } = require("express");

mongoose.connect("mongodb://localhost/projectthree", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

let CharacterSeed = [
  {
    name: "Frodo Baggins",
    characterDescription:
      "The ring-bearer, a young hobbit, chosen by the wizrd Gandalf to return the ring to Mordor. The ring changed Frodo from an ordinary hobbit of exceptional qualities into someone extraordinary, becoming a legend, eventually leaving the land of mortals to a life with the immortal elves. Have this legend visit your next LOTR watch party! ",
    image:
      "https://i2.wp.com/www.theonering.net/torwp/wp-content/uploads/2011/01/frodo_sweetw300h456.jpg?ssl=1",
  },
  {
    name: "Bilbo Baggins",
    characterDescription:
      "Frodo's uncle, who possesses the ring at the beginning, a playful old hobbit, but very protective and restless about the ring. Invite this cheerful old hobbit to your next LOTR watch party!",
    image:
      "https://cdn.costumewall.com/wp-content/uploads/2018/10/bilbo-baggins.jpg",
  },
  {
    name: "Gimli",
    characterDescription:
      "This bearded, ax-wielding warrior dwarf is a brave and loyal member of the fellowship of the ring. Invite him to your next LOTR watch party for some sure entertainment!",
    image:
      "https://i.cbc.ca/1.4291804.1505491472!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/gimli-lord-of-the-rings.jpg",
  },
  {
    name: "Aragorn",
    characterDescription:
      "The heir to the throne of Gondor, proven himself to be a noble leader with a pure heart. Welcome this worthy leader into you next LOTR watch party!",
    image:
      "https://www.denofgeek.com/wp-content/uploads/2018/05/viggo-mortensen-aragorn-lord-of-the-rings-the-two-towers.jpg?fit=620%2C368",
  },
  {
    name: "Legolas",
    characterDescription:
      "Very skillful with a bow and arrow, this boyish elf has a consistently higher kill number than that of Gimli. Just like his dwarf friend, he is a brave and loyal member of the fellowship of the ring.",
    image:
      "https://vignette.wikia.nocookie.net/lotr/images/3/33/Legolas_-_in_Two_Towers.PNG/revision/latest?cb=20120916035151",
  },
  {
    name: "Gandalf",
    characterDescription:
      "The grandfatherly wizard that is the first to understand the dangerous powers that Bilbo's ring holds. With remarkable wisdom and insight into hobbites and men alike, he sees potential and ability where others do not. Invite this wise wizard to your next LOTR watch party!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXxS_UX6tvEpUSZFCkaGElNyQsgYgJKRIReg&usqp=CAU",
  },
  {
    name: "Samwise Gamgee",
    characterDescription:
      "Frodo's best friend and constant companion, extremely loyal in helping Frodo complete his mission with the ring.His life represents the mortal life lived to the fullest as immortality holds no charm for him and we only wants to thrive in the present. Invite this loyal comrade to your next LOTR watch party!",
    image:
      "https://litreactor.com/sites/default/files/images/column/headers/samwise_gamgee.jpg",
  },
  {
    name: "Pippin Took",
    characterDescription:
      "Another michievous hobbit, playful and enjoys a good party. What more do you need to know to invite this party-goer to your next LOTR watch party?",
    image:
      "https://vignette.wikia.nocookie.net/ouatff/images/c/c0/806PippinTook.png/revision/latest?cb=20180111040251",
  },
  {
    name: "Merry Brandybuck",
    characterDescription:
      "Best friend to Pippin, Merry is a mischievous and courageous hobbit, a rabble-rouser and troublemaker really. However, he proves himself to be a fearless fihter at the grat battle of Minas Tirith, when he helps slay the witch-king. Invite him to yokur next LOTR watch party for some extra fun!",
    image:
      "https://pm1.narvii.com/6262/7b4de121ba0e169a61af74d6c03fc4b234b4fe77_00.jpg",
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
    img: "silvermenuimg",
    partyPackageName: "Silver",
    menuDescription: "Perfect for an intimate viewing of Lord of the Rings. After all, two is company! The menu we suggest would include Banana and Dark Chocolate Crepes, Eggs Benedict on Sourdough bread, and a Buttersquash soup.",
  },
  {
    img: "steelmenuimg",
    partyPackageName: "Steel",
    menuDescription: "Throwing a jubilant soirée? This package is meant for you. Menu items include finger foods such as Mini Bacon and Cheese Quiche, Scones and Clotted Cream, and a Deliciously Decadent Charcuterie board.",
  },
  {
    img: "dragonmenuimg",
    partyPackageName: "Dragon Glass",
    menuDescription: "For the dedicated Weekend-Marathon fan. You've cleared your schedule, invited your friends (there's always that one friend who has never seen it before), and you're ready to live in the world of Middle Earth for 48 hours. This menu includes Lemon Tart pie, Raspberry Butter Jam with Toast and a Crispy Roasted Garlic Chicken to finish.",
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

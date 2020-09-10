const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Characters.find(req.query)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(422);
        console.log(err);
      });
  },

  findOne: function (req, res) {
    let characterId = { _id: req.params.id };
    db.Characters.findOne(characterId, function (result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
    });
    res.status(200).end();
  },
};

const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Menu.find(req.query)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(422);
        console.log(err);
      });
  },

  findOne: function (req, res) {
    let menuId = { _id: req.params.id };
    db.Menu.findOne(menuId, function (result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
    });
    res.status(200).end();
  },
};

const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Party.find(req.query)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(422);
        console.log(err);
      });
  },

  findOne: function (req, res) {
    let bookingId = { _id: req.params.id };
    db.Party.findOne(bookingId, function (result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
    });
    res.status(200).end();
  },

  create: function (req, res) {
    db.Party.create(req.body)
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },

  delete: function (req, res) {
    let deleteId = { _id: req.params.id };
    db.Party.deleteOne(deleteId, function (result) {
      if (result.changedRows === 0) {
        return res.status(422).end();
      }
    });
    res.status(200).end();
  },
};

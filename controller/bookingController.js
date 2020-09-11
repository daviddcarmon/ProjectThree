const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Party.find(req.query)
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  findOne: function (req, res) {
    db.Party.findById(req.params.id)
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },

  create: function (req, res) {
    db.Party.create(req.body)
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },

  delete: function (req, res) {
    db.Party.findById({ _id: req.params.id })
    .then((data) => data.remove())
    .then((data) => res.json(data))
    .catch((err) => res.status(422).json(err));



    // let deleteId = { _id: req.params.id };
    // db.Party.deleteOne(deleteId, function (result) {
    //   if (result.changedRows === 0) {
    //     return res.status(422).end();
    //   }
    // });
    // res.status(200).end();
  },
};

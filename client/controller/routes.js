const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/api/bookings", (req, res) => {
  Party.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(404);
      console.log(err);
    });
});

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const path = require("path");
// const Party = require("../models/Party");
// const Characters = require("../models/Characters");
// const passport = require("passport");

// router.get("/api/bookings", (req, res) => {
//   Party.find({})
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.status(404);
//       console.log(err);
//     });
// });

// router.post("/api/bookings", (req, res) => {
//   Party.insertOne(req.body, function (result, err) {
//     if (err) {
//       console.log(`Error at post`);
//     }
//     res.json({ newBooking: result.booking });
//   });
// });

// router.get("/api/bookings/:id", function (req, res) {
//   let bookingId = { id: req.params.id };
//   Party.findOne(bookingId, function (result) {
//     if (result.changedRows === 0) {
//       return res.status(404).end();
//     }
//   });
//   res.status(200).end();
// });

// router.delete("/api/bookings/:id", function (req, res) {
//   let deleteId = { id: req.params.id };
//   Party.deleteOne(deleteId, function (result) {
//     if (result.changedRows === 0) {
//       return res.status(404).end();
//     }
//   });
//   res.status(200).end();
// });

// router.get("/api/characters", (req, res) => {
//   Character.find({})
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.status(404);
//       console.log(err);
//     });
// });

// router.get("/api/menu", (req, res) => {
//   Menu.find({})
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.status(404);
//       console.log(err);
//     });
// });

// module.exports = router;

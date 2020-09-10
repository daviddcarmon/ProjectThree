const router = require("express").Router();
const bookingRoutes = require("./booking");
const characterRoutes = require("./characters");

// routes
router.use("/bookings", bookingRoutes);
router.use("/characters", characterRoutes);

module.exports = router;

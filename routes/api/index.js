const router = require("express").Router();
const bookingRoutes = require("./booking");

// routes
router.use("/bookings", bookingRoutes);

module.exports = router;

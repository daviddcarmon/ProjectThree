const router = require("express").Router();
const bookingRoutes = require("./booking");
const characterRoutes = require("./characters");
const menuRoutes = require("./menu");
// routes
router.use("/bookings", bookingRoutes);
router.use("/characters", characterRoutes);
router.use("/menu", menuRoutes);

module.exports = router;

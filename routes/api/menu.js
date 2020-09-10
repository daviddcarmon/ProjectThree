const router = require("express").Router();
const menuController = require("../../controller/menuController");

router.route("/").get(menuController.findAll);

router.route("/:id").get(menuController.findOne);

module.exports = router;

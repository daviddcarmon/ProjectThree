const router = require("express").Router();
const characterController = require("../../controller/characterController");

router.route("/").get(characterController.findAll);

router.route("/:id").get(characterController.findOne);

module.exports = router;

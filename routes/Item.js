const controller = require("../controller/item");

const express = require("express");
const router = express.Router();

router.post("/register", controller.postDetails);

module.exports = router;

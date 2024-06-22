var express = require('express');
var router = express.Router();

const controller = require("../controllers/brands.controller");

// Prefijo: /brands
router.get("/", controller.index);

module.exports = router;
var express = require('express');
var router = express.Router();

const controller = require("../controllers/brands.controller");

const authMiddleware = require("../middlewares/auth.middleware");

// Prefijo: /brands
router.get("/", authMiddleware, controller.index);

module.exports = router;
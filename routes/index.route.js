const express = require("express");
const router = express.Router();

const controller = require("../controllers/index.controller");

const authMiddleware = require("../middlewares/auth.middleware");

router.get("/", authMiddleware, controller.index);

module.exports = router;
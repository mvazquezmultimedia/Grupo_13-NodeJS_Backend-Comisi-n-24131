var express = require('express');

var router = express.Router();

const controller = require("../controllers/products.controller");

const authMiddleware = require("../middlewares/auth.middleware");

// Prefijo: /productos
router.get("/", authMiddleware, controller.index);
router.get("/:id", authMiddleware, controller.show);
router.put("/:id", authMiddleware, controller.update);
router.delete("/:id", authMiddleware, controller.destroy);
router.post("/", authMiddleware, controller.create);

module.exports = router;

var express = require('express');
var router = express.Router();

const controller = require("../controllers/products.controller");

// Prefijo: /productos
router.get("/", controller.index);
router.get("/:id", controller.show);
router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);
router.post("/", controller.create);

module.exports = router;

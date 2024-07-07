var express = require('express');
var cors = require('cors')
var router = express.Router();

const controller = require("../controllers/products.controller");

const authMiddleware = require("../middlewares/auth.middleware");

var allowlist = ['*']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

// Prefijo: /productos
router.get("/", cors(corsOptionsDelegate), authMiddleware, controller.index);
router.get("/:id", authMiddleware, controller.show);
router.put("/:id", authMiddleware, controller.update);
router.delete("/:id", authMiddleware, controller.destroy);
router.post("/", authMiddleware, controller.create);

module.exports = router;

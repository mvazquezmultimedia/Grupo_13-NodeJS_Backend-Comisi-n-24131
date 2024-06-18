var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/', function(req, res, next) {
  
    const product = {
        "id": 1,
        "name" : "Product name",

     };
  res.send(product);
});

module.exports = router;

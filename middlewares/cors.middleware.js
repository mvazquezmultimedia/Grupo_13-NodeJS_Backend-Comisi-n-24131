
var express = require('express');
var cors = require('cors')
require("dotenv").config();

var allowlist = [process.env.ALLOWED_CORS_HOST ]

module.exports = (req, callback, next) => {

    var corsOptions;
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
      corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
      corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options

}
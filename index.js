var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index.route');
var usersRouter = require('./routes/users.route');
var productsRouter = require('./routes/products.route');
var brandsRouter = require('./routes/brands.route');
var authRouter = require('./routes/auth.route');

const cors = require('cors');

const config = require('./config');

var app = express();

var app = express();

app.use(cors(
  config.application.cors.server
));

// view engine setup
const layouts = require("express-ejs-layouts");
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(layouts);
app.set("layout", "layouts/layout");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/brands', brandsRouter);
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

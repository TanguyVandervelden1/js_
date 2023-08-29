var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const cors = require('cors');


const corsOptions = {
  origin: 'http://localhost:8080',
};

var pizzaRouter = require('./routes/pizzas');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use('/', pizzaRouter);
app.use('/pizzas', cors(corsOptions),pizzaRouter);
app.use('/users', cors(corsOptions), usersRouter);

module.exports = app;

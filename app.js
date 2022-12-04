/* eslint-disable no-undef */

import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import createError from 'http-errors';
import logger from 'morgan';
import path from 'path';
import './src/config/database';
import oauthServer from './src/config/oauthServer';
import "./src/model/index";
import setRoutes from './src/routes/index';

var app = express();

app.oauth = oauthServer;
//CORS
var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes setup
setRoutes(app);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

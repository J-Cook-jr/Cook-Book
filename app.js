var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var apiRouter = require('./routes/api');
const db = require('./models');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// TODO: put react app here
app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/api/v1/', apiRouter);

app.get('*', (req,res)=> {
  res.sendFile(path.resolve(_dirname, 'client/build/index.html'))
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.json(err);
//db.sequelize(sync)
});
module.exports = app;
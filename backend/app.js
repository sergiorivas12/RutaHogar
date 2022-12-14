var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var autenticator = require('./tools/autenticator');
var fileUpload = require('express-fileupload');
var cors = require('cors');

require('dotenv').config();
var pool = require('./models/bd');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/admin/login');
var bienvenidoRouter = require('./routes/admin/bienvenido');
var productosRouter = require('./routes/admin/productos');
var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret              : 'Rigio!1718Ab.Cd.12345',
    resave              : false,
    saveUninitialized   : true
}));

app.use(fileUpload({
    useTempFiles    : true,
    tempFileDir     : '/tmp/',
}));

app.use('/', indexRouter);
app.use('/users', autenticator.auth, autenticator.perfil, usersRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/bienvenido', autenticator.auth, bienvenidoRouter);
app.use('/admin/productos', autenticator.auth, productosRouter);
app.use('/api', cors(), apiRouter);

/*pool.query("select * from usuario").then(function(resultados){
    console.log(resultados);
});*/

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

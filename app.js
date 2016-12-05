var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
// dependencias locales
var hbsHelpers = require('./lib/helpers/handlebars');
var routes = require('./routes/index');
var personas  = require('./routes/personas');
var apuestas  = require('./routes/apuestas');

var app = express();
// view engine config
var hbs = exphbs.create({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
  extname: '.hbs',
  helpers: {
    apostadores: hbsHelpers.apostadores
  }
});
// View Engine setup
app.engine('.hbs', hbs.engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');
// Server config
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/', routes);
app.use('/personas', personas);
app.use('/apuestas', apuestas);

// Ruta de documentacion
app.get('/docs', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/public/docs.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  });
});



module.exports = app;
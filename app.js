var createError = require('http-errors')
var express = require('express')
var expressHsb = require('express-handlebars')
var sessionExpress = require('express-session')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var mongoose = require('mongoose')
var session = require('express-session')
var passport = require('passport')
var flash = require('connect-flash')
var validator = require('express-validator')
// var indexRouter = require('./routes/index')
// var usersRouter = require('./routes/users')
// var tripsRouter = require('./routes/trips')
// var stationRouter = require('./routes/stations')
// var vehiclesRouter = require('./routes/vehicles')
var Router = require('./routes/api')
var url = 'mongodb://localhost:27017/booking_busticket'
var app = express()
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connect successful'))
  .catch(err => console.log(err))

// view engine setup
app.engine(
  '.hbs',
  expressHsb({
    defaultLayout: 'layoutDash',
    extname: '.hbs',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
  })
)
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(
  sessionExpress({
    secret: 'mysupersecret',
    resave: false,
    saveUninitialized: false
  })
)
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', Router)
// app.use('/users', usersRouter)
// app.use('/trips', tripsRouter)
// app.use('/vehicles', vehiclesRouter)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app

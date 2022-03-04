var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require('cors');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MartDB', { useNewUrlParser: true })
let db = mongoose.connection;
require('./models/categoryModel');
require('./models/productModel');
require('./models/registerModel');
require('./models/cartmodel');


// require('./models/mobileModel');
var categoryCTRL = require('./controllers/categorycontroller');
var productCTRL = require('./controllers/productcontroller');
// var mobileCTRL = require('./controllers/mobilecontroller');
var registerCTRL = require('./controllers/registercontroller');
var cartCTRL = require('./controllers/cartcontroller');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.route('/category')
   .get(categoryCTRL.list_all_tasks)
   .post(categoryCTRL.create_a_task);
app.route('/category/:categoryId')
   .get(categoryCTRL.read_a_task)
   .put(categoryCTRL.update_a_task)
   .delete(categoryCTRL.delete_a_task)

app.route('/product')
   .get(productCTRL.list_all_tasks)
   .post(productCTRL.create_a_task);
// app.route('/product/:productId')
//    .get(productCTRL.read_a_task)
//    .put(productCTRL.update_a_task)
//    .delete(productCTRL.delete_a_task)

app.route('/product/:category_id')
   .get(productCTRL.find_a_task)

app.route('/register')
   .get(registerCTRL.list_all_tasks)
   .post(registerCTRL.create_a_task);
app.route('/register/:registerId')
   .get(registerCTRL.read_a_task)
   .put(registerCTRL.update_a_task)
   .delete(registerCTRL.delete_a_task)
app.route('/userLogin')
   .post(registerCTRL.user_login);

app.route('/addtocart')
   .post(cartCTRL.create_a_task)
   .get(cartCTRL.list_all_tasks);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
   next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
   // set locals, only providing error in development
   res.locals.message = err.message;
   res.locals.error = req.app.get('env') === 'development' ? err : {};

   // render the error page
   res.status(err.status || 500);
   res.render('error');
});

module.exports = app;

var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports.getOrder = (req, res, next) => {
  res.render('orders/orderList', { order: 'order' });
};
module.exports.getOrderDetail = (req, res, next) => {
  res.render('orders/orderDetail', { order: 'order' });
};
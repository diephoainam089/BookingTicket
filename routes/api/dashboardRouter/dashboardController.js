var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports.getDashboard = (req, res, next) => {
  res.render('pages/dashboard', { dashboard: 'dashboard' });
};



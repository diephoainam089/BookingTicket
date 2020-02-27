var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports.getUser = (req, res, next) => {
  res.render('users/userList', { user: 'user' });
};

module.exports.getUserDetail = (req, res, next) => {
  res.render('users/userDetail', { user: 'user' });
};

module.exports.uploadUser = (req, res, next) => {
  res.render('users/userUpload', { user: 'user' });
};

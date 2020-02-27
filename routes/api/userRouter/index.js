var express = require('express');
const UserController = require('./userController')
var router = express.Router();

/* GET home page. */
router.get('/', UserController.getUser);
router.get('/detail/:id', UserController.getUserDetail);
router.get('/upload/:id', UserController.uploadUser);
module.exports = router;

var express = require('express');
const DashboardController = require('./dashboardController')
var router = express.Router();

/* GET home page. */
router.get('/', DashboardController.getDashboard);

module.exports = router;

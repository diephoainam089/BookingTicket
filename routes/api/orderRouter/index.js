var express = require('express');
const OrderController = require('./orderController')
var router = express.Router();

/* GET home page. */
router.get('/', OrderController.getOrder);
router.get('/detail/:id', OrderController.getOrderDetail);
router.delete('/')
module.exports = router;

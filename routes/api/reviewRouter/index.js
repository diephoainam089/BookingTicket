var express = require('express');
const ReviewController = require('./reviewController')
var router = express.Router();

/* GET home page. */
router.get('/', ReviewController.getReview);
router.get('/delete', ReviewController.deleteReview);
module.exports = router;

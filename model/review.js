const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref:"user" },
  date: { type: Date, required: true },
  content: {type: String, require: true},
})

const Review = mongoose.model('Review', ReviewSchema, 'reviews')

module.exports = {
  ReviewSchema,
  Review
}
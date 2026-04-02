const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true }, // in days
  features: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Plan', planSchema);
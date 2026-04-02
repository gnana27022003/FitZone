const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  areaName: { type: String, required: true },
  address: { type: String, required: true },
  pincode: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Location', locationSchema);
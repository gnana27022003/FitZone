const mongoose = require('mongoose');

const user = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  emailOTP: String,
  emailOTPExpiry: Date,
  
});

module.exports = mongoose.model('Users', user);
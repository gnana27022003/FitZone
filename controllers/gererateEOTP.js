const transporter = require('../services/mailer');
const crypto = require('crypto');
const { emailOtpStore } = require('../utils/otpStore');
const User = require('../models/user')


const generateEOTP = async (req, res) => {
  const { email } = req.body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ message: "Valid email required" });
  }
  
  const user = await User.findOne({email:email})
  if (req.body.type === 'signup' && user) {
    return res.status(409).json({ message: 'User already exists with this email.' }); 
  }
  // cooldown check
  if (emailOtpStore[email] && Date.now() < emailOtpStore[email].cooldown) {
    return res.status(429).json({ message: "new OTP can be sent after the old one expires(5mins)" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  const hashedOTP = crypto
    .createHash('sha256')
    .update(otp)
    .digest('hex');

  emailOtpStore[email] = {
    otp: hashedOTP,
    expires: Date.now() + 1 * 60 * 1000, //5 mins
    cooldown: Date.now() + 60 * 1000
  };

  try {
    await transporter.sendMail({
      to: email,
      subject: 'OTP Verification',
      html: `<h3>Your OTP: ${otp}</h3>`
    });

    return res.json({ message: "OTP sent to email" });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Email send failed" });
  }
};

module.exports = { generateEOTP };
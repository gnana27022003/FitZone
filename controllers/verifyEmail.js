const crypto = require('crypto');
const { emailOtpStore } = require('../utils/otpStore');

const verifyEmail = async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ message: "Email and OTP required" });
  }

  const record = emailOtpStore[email];

  if (!record) {
    return res.status(400).json({ message: "No OTP found" });
  }

  if (Date.now() > record.expires) {
    return res.status(400).json({ message: "OTP expired" });
  }

  const hashedOTP = crypto
    .createHash('sha256')
    .update(otp)
    .digest('hex');

  if (hashedOTP !== record.otp) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  delete emailOtpStore[email];

  return res.json({ message: "Email verified successfully" });
};

module.exports = { verifyEmail };
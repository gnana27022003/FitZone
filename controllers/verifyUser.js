// controllers/verifyUser.js
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const verifyUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'All fields are required.' });
        }

        const user = await User.findOne({ email: email.toLowerCase().trim() });

        // Security Tip: Use generic messages to prevent user enumeration
        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid email or password.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid email or password.' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.SECRET, { expiresIn: '2h' });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7200000 // 2 hours
        });

        res.status(200).json({
            success: true,
            message: 'Access granted. Welcome back!'
        });
    } catch (err) {
        next(err); // Passes error to errorMiddleware
    }
};

module.exports = { verifyUser };
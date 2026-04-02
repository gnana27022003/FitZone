const User = require('../models/user'); // Ensure this matches your filename
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUserAccount = async (req, res) => {
    try {
        let { name, email, password } = req.body;

        // 1. Validation Logic
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required to forge your account.'
            });
        }

        name = name.trim();
        email = email.trim();
        password = password.trim();

        // 2. Check for existing user
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: 'This email is already registered with FitZone.'
            });
        }

        // 3. Hash Password and Create User
        const saltrounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltrounds);
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });

        // 4. JWT & Cookie Sync (Real-world "Smooth Transition")
        // Generate token immediately so the user doesn't have to log in right after signing up
        const token = jwt.sign(
            { userId: newUser._id }, 
            process.env.SECRET, 
            { expiresIn: '1h' }
        );

        // Set the secure cookie
        res.cookie('token', token, {
            httpOnly: true,
            sameSite: "strict",
            maxAge: 3600000 // 1 hour
        });

        return res.status(200).json({
            success: true,
            message: 'Account forged successfully! Redirecting...'
        });

    } catch (err) {
        console.error('Signup Error:', err);
        return res.status(500).json({
            success: false,
            message: 'Internal server error. Please try again later.'
        });
    }
};

module.exports = { createUserAccount };
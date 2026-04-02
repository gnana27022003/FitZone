const User = require('../models/user');
const bcrypt = require('bcrypt');

const resetPassword = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ 
                success: false, 
                message: "Missing email or new password." 
            });
        }

        // 1. Find the user
        const user = await User.findOne({ email: email.toLowerCase().trim() });
        if (!user) {
            return res.status(404).json({ 
                success: false, 
                message: "User not found." 
            });
        }

        // 2. Hash the new password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // 3. Update the database
        user.password = hashedPassword;
        await user.save();

        return res.status(200).json({ 
            success: true, 
            message: "Password reset successfully! Redirecting..." 
        });

    } catch (err) {
        next(err); 
    }
};

module.exports = { resetPassword };
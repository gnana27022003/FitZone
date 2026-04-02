// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        // If the user isn't logged in, redirect them to login
        return res.redirect('/login');
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        req.userId = decoded.userId; 
        next();
    } catch (err) {
        res.clearCookie('token');
        return res.redirect('/login');
    }
};

module.exports = authMiddleware;
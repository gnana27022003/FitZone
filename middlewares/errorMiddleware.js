// middlewares/errorMiddleware.js
const errorMiddleware = (err, req, res, next) => {
    console.error('SERVER ERROR:', err.stack);

    const statusCode = err.statusCode || 500;
    const message = err.message || 'An unexpected fitness failure occurred. Try again.';

    res.status(statusCode).json({
        success: false,
        message: message
    });
};

module.exports = errorMiddleware;
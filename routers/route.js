const express = require('express');
const { generateEOTP } = require('../controllers/gererateEOTP');
const { verifyEmail } = require('../controllers/verifyEmail');
const { createUserAccount } = require('../controllers/CreateUserAccount');
const { verifyUser } = require('../controllers/verifyUser');
const Plan = require('../models/plan'); // Ensure paths are correct 
const Location = require('../models/location');
const Subscription = require('../models/subscription');
const { resetPassword } = require('../controllers/handleforgotPass');
const router = express.Router();
const User = require('../models/user');
const authMiddleware = require('../middlewares/authMiddleware');
const jwt = require('jsonwebtoken'); 

router.use(async (req, res, next) => {
    const token = req.cookies.token;
    
    
    res.locals.isLoggedIn = false;
    res.locals.subscription = null;
    res.locals.user = null;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.SECRET);
            res.locals.isLoggedIn = true;
            
            
            const userSub = await Subscription.findOne({ 
                userId: decoded.userId, 
                status: 'active' 
            });
            res.locals.subscription = userSub;
            
            
            req.userId = decoded.userId; 
        } catch (err) {
            res.clearCookie('token');
        }
    }
    next(); 
});

router.get('/login', (req, res) => res.render('login'));
router.get('/signup', (req, res) => res.render('signup'));

router.post('/signup',createUserAccount)

router.post('/login',verifyUser)


router.post('/reset-password',resetPassword)

router.get('/contact',authMiddleware,(req,res)=>{
    res.render('contact')
})

router.get('/about',(req,res)=>{
    
    res.render('about')
})


router.get('/success',authMiddleware,(req,res)=>{
    res.render('success')
})






router.get('/', async (req, res) => {
    try {
        const locations = await Location.find();
        const plans = await Plan.find().limit(3);
       
        res.render('home',{plans,locations});

    } catch (err) {
        console.error("Home Route Error:", err);
        res.status(500).send("Error loading home page");
    }
});


router.get('/plans', authMiddleware,async (req, res) => {
    try {
        const plans = await Plan.find();

        res.render('plans', { plans });
    } catch (err) {
        res.status(500).send("Error loading plans");
    }
});

//  all registered branches 
router.get('/locations', authMiddleware,async (req, res) => {
    try {
        const locations = await Location.find();
        res.render('locations', { locations });
    } catch (err) {
        res.status(500).send("Error loading locations");
    }
});

router.get('/checkout',authMiddleware, async (req, res) => {
    try {
        const plan = await Plan.findById(req.query.planId);
        if (!plan) return res.redirect('/plans');

        const user = await User.findById(req.userId)

        res.render('checkout', { plan, user });
    } catch (err) {
        res.status(404).send("Plan not found");
    }
});




router.post('/subscribe',authMiddleware, async (req, res) => {
    try {
        const { planId } = req.body;
        const plan = await Plan.findById(planId);
        
    
        const userId = req.userId; 

        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + plan.duration);

        const newSub = new Subscription({
            userId: userId,
            planId: plan._id,
            planName: plan.name,
            price: plan.price,
            expiryDate: expiryDate,
            paymentMethod:req.body.paymentMethod,
            status: 'active'
        });

        await newSub.save();
        res.redirect('/success');
    } catch (err) {
        res.status(500).send("Subscription failed: " + err.message);
    }
});


router.get('/profile', authMiddleware, async (req, res) => {
    try {
        
        const user = await User.findById(req.userId);
        
        
        const subscription = await Subscription.findOne({ userId: req.userId }).sort({ startDate: -1 });
        
      
        res.render('profile', { 
            subscription: subscription || null, 
            user 
        });
    } catch (err) {
        console.error("Profile Error:", err);
        res.status(500).send("Error loading profile");
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie('token'); 
    res.redirect('/login');    
});





router.post('/login',verifyUser)

router.post('/generate-email-otp', generateEOTP);


router.post('/verify-email', verifyEmail);


router.get('/forgotpass', (req, res) => res.render('forgotpass'));



module.exports = router;
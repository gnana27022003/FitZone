const express = require('express');
const { generateEOTP } = require('../controllers/gererateEOTP');
const { verifyEmail } = require('../controllers/verifyEmail');
const { createUserAccount } = require('../controllers/CreateUserAccount');
const { verifyUser } = require('../controllers/verifyUser');

const router = express.Router();

router.get('/login', (req, res) => res.render('login'));
router.get('/signup', (req, res) => res.render('signup'));

router.post('/signup',createUserAccount,(req,res)=>{
    res.redirect('/home')
})

router.post('/login',verifyUser)

router.get('/home', (req, res) => {
    res.render('home');
});

router.get('/plans',(req,res)=>{
    res.render('plans')
})

router.get('/locations',(req,res)=>{
    res.render('locations')
})

router.get('/checkout',(req,res)=>{
    res.render('checkout')
})



router.get('/contact',(req,res)=>{
    res.render('contact')
})


router.get('/about',(req,res)=>{
    res.render('about')
})


router.get('/success',(req,res)=>{
    res.render('success')
})









router.post('/login',verifyUser)

router.post('/generate-email-otp', generateEOTP);


router.post('/verify-email', verifyEmail);


router.get('/forgotpass', (req, res) => res.render('forgotpass'));

router.get('/profile',(req,res)=>{
    res.render('profile')
})

module.exports = router;
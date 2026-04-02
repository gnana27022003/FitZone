const aroute = require('express').Router();
const Plan = require('../models/plan'); // Adjust paths based on your folder structure
const Location = require('../models/location');
const Subscription = require('../models/subscription')
const User = require('../models/user')



aroute.get('/dashboard', async (req, res) => {
    try {
        
        const revenueData = await Subscription.aggregate([
            { $group: { _id: null, total: { $sum: "$price" } } }
        ]);
        const totalRevenue = revenueData.length > 0 ? revenueData[0].total : 0;

        
        const activeLegends = await Subscription.countDocuments({ status: 'active' });

        
        const totalLocations = await Location.countDocuments();

        res.render('admin/dashboard', {
            stats: {
                revenue: totalRevenue,
                active: activeLegends,
                locations: totalLocations
            },
            page: 'dashboard'
        });
    } catch (err) {
        console.error("Dashboard Error:", err);
        res.status(500).send("Error loading dashboard stats");
    }
});

aroute.get('/subscriptions',async(req,res)=>{
    try{
        const subs = await Subscription.find().populate('userId');
        res.render('admin/subscriptions',{subscribers: subs,page:'subs'})
    }catch(err){
        res.redirect('/dashboard')
        console.log(err)
    }
    
})

aroute.get('/addPlan',(req,res)=>{
    res.render('admin/addPlan')
})

aroute.get('/addLocation',(req,res)=>{
    res.render('admin/addLocation')
})

aroute.get('/editLocation',(req,res)=>{
    res.render('admin/editLocation')
})

aroute.get('/editPlan',(req,res)=>{
    res.render('admin/editPlan')
})


aroute.get('/plans', async (req, res) => {
    try {
        const planCount = await Plan.countDocuments();
        const plans = await Plan.find().sort({ createdAt: -1 });
        res.render('admin/plans', { plans,planCount });
    } catch (err) {
        res.status(500).send("Error fetching plans: " + err.message);
    }
});

// Display all locations with real data from DB
aroute.get('/locations', async (req, res) => {
    try {
        const locationCount = await Location.countDocuments();
        const locations = await Location.find().sort({ createdAt: -1 });
        res.render('admin/locations', { locations,locationCount });
    } catch (err) {
        res.status(500).send("Error fetching locations: " + err.message);
    }
});



// Edit Plan View - Fetch specific plan by ID
aroute.get('/editPlan/:id', async (req, res) => {
    try {
        const plan = await Plan.findById(req.params.id);
        if (!plan) return res.status(404).send("Plan not found");
        res.render('admin/editPlan', { plan });
    } catch (err) {
        res.status(500).send("Server Error");
    }
});

// Edit Location View - Fetch specific location by ID
aroute.get('/editLocation/:id', async (req, res) => {
    try {
        const location = await Location.findById(req.params.id);
        if (!location) return res.status(404).send("Location not found");
        res.render('admin/editLocation', { location });
    } catch (err) {
        res.status(500).send("Server Error");
    }
});


aroute.post('/plans/save', async (req, res) => {
    try {
        const { name, price, duration, features } = req.body;
        
        // Validation: Ensure no empty fields
        if (!name || !price || !duration) {
            return res.status(400).send("All fields are required.");
        }

        const featureArray = features ? features.split(',').map(f => f.trim()) : [];
        
        const newPlan = new Plan({ name, price, duration, features: featureArray });
        await newPlan.save();
        res.redirect('/admin/plans');
    } catch (err) {
        res.status(500).send("Failed to save plan: " + err.message);
    }
});

aroute.post('/locations/save', async (req, res) => {
    try {
        const { areaName, address, pincode, state, country } = req.body;

        if (!areaName || !address || !pincode || !state) {
            return res.status(400).send("Missing required location fields.");
        }

        const newLocation = new Location({ areaName, address, pincode, state, country });
        await newLocation.save();
        res.redirect('/admin/locations');
    } catch (err) {
        res.status(500).send("Failed to save location.");
    }
});


aroute.post('/plans/update/:id', async (req, res) => {
    try {
        const { name, price, duration, features } = req.body;
        const featureArray = features ? features.split(',').map(f => f.trim()) : [];

        await Plan.findByIdAndUpdate(req.params.id, {
            name, price, duration, features: featureArray
        }, { runValidators: true });

        res.redirect('/admin/plans');
    } catch (err) {
        res.status(500).send("Update failed.");
    }
});

aroute.post('/locations/update/:id', async (req, res) => {
    try {
        await Location.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
        res.redirect('/admin/locations');
    } catch (err) {
        res.status(500).send("Update failed.");
    }
});


aroute.get('/plans/delete/:id', async (req, res) => {
    try {
        await Plan.findByIdAndDelete(req.params.id);
        res.redirect('/admin/plans');
    } catch (err) {
        res.status(500).send("Deletion failed.");
    }
});

aroute.get('/locations/delete/:id', async (req, res) => {
    try {
        await Location.findByIdAndDelete(req.params.id);
        res.redirect('/admin/locations');
    } catch (err) {
        res.status(500).send("Deletion failed.");
    }
});




aroute.get('/profile/:id', async (req, res) => {
    try {
        const userId = req.params.id;

        // Fetch user basic info
        const user = await User.findById(userId);
        
      
        const subscription = await Subscription.findOne({ userId: userId })
            .sort({ startDate: -1 })
            .populate('planId');

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.render('admin/viewSubscriber', {
            user,
            subscription,
            page: 'subs' 
        });
    } catch (err) {
        console.error("Admin View Error:", err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = aroute
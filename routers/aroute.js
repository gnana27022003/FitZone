const aroute = require('express').Router();



aroute.get('/admin-locations',(req,res)=>{
    res.render('admin/locations')
})

aroute.get('/admin-plans',(req,res)=>{
    res.render('admin/plans')
})

aroute.get('/admin-dashboard',(req,res)=>{
    res.render('admin/dashboard')
})

aroute.get('/admin-subscriptions',(req,res)=>{
    res.render('admin/subscriptions')
})

module.exports = aroute
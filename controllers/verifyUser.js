const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const verifyUser = async(req,res) => {
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email:email});
        if(!user){
            return res.status(404).json({
                success:false,
                message:'Invalid Username!!'
            })
        }
        const isPassword = await bcrypt.compare(password,user.password)
        if(!isPassword){
            return res.status(400).json({
                success:false,
                message:'Invalid Password!!'
            })
        }
        const token = jwt.sign({userId:user._id},process.env.SECRET,{expiresIn:'1h'})
        res.cookie('token',token,{
            httpOnly: true,
            sameSite: "strict",
            maxAge: 3600000
        })
        return res.status(200).json({
            success:true,
            message:"login successful"
        })
    }catch(err){
        console.log('server error',err)
        return res.status(500).json({
            success:false,
            message:'Internal server error'
        })
    }
}

module.exports = {verifyUser}
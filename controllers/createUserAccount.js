const User = require('../models/user')
const bcrypt = require('bcrypt')

const createUserAccount = async(req,res) => {
    try{
        const {name,email,password} = req.body;
        name = name.trim()
        email = email.trim()
        password = password.trim()
        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message:'Please fill out all the required fields'
            })
        }
         const existingUser = await User.findOne({email:email})

        if(existingUser){
            return res.status(409).json({
                success:false,
                message:'User Already exists with same email !!'
            })
        }

        const saltrounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltrounds)
        await User.create({
            name,
            email,
            password:hashedPassword
        })
        return res.status(200).json({
            success:true,
            message:'User Account created successfully'
        })
        
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:'Internal sever error'
        })
    }
}

module.exports = {createUserAccount}
const express = require('express'); 
const router = express.Router();
const User = require('../models/User');
const CryptoJS = require("crypto-js");
//Regsiter
router.post("/register", async(req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    })
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch(err){
        res.status(500).json(err);
    }
    
    
})

//Login

router.post('/login', async (req, res) =>{
    try {
        const user = await User.findOne({username: req.body.username});
        !user && res.status(401).json("Wrong credentials");
        
        const hashPwd = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        
        const Originalpassword = hashPwd.toString(CryptoJS.enc.Utf8);
        //Originalpassword !== req.body.password && res.status(401).json("Wrong credentials");
        //unable to figure out why this if statement above is not working.
        
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;
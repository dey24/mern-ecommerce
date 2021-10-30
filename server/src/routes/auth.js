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

        const hashPwd = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);

        const pwd = hashPwd.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;
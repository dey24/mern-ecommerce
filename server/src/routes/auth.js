const express = require('express'); 
const router = express.Router();
const User = require('../models/User');
//Regsiter
router.post("/register", async(req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })
    const savedUser = await newUser.save();

    
})


module.exports = router;
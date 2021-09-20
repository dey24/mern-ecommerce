const express = require('express');
const router = express.Router();
const User = require('../models/users')

router.post('/signin', (req, res) =>{

})

router.post('/signup', (req, res) =>{

    User.findOne({ email: req.body.email})
    .exec((err, user) =>{
        if(err || !user) return res.status(200).json({ message: "User already registered"});
        
        const {
            firstName, lastName, email, password
        } = req.body;

        const _user = new User({firstName, lastName, email, password, username: Math.random().toString()});

        _user.save((err, data) =>{
            if(err){
                return res.status(400).json({ message:"Something went wrong"})
            }

            if(data){
                return res.status(201).json({
                    user:data
                })
            }
        });
    });
})

module.exports = router;
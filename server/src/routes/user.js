const express = require('express'); 
const router = express.Router();
var User = require('../models/users')

router.post('/signin', (req, res) =>{
    res.send("user signin is successful");
})

router.post('/signup', (req, res) =>{

})

module.exports = router;
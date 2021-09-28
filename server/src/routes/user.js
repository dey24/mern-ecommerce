const express = require('express'); 
const router = express.Router();


router.post('/signin', (req, res) =>{
    res.send("user signin is successful");
})

router.post('/signup', (req, res) =>{
    const username = req.body.username;
    res.send("you username is " + username);
})

module.exports = router;
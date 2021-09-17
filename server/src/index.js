const express = require('express');
const env = require('dotenv').config();
const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

//requests

app.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Hello from Server'
    })
})

app.get('/data', (req, res, next) => {
    res.status(200).json({
        message: req.body
    })
})

app.listen(port,host, () => {
    console.log(`Server is running on ${host}:${port}`);
});
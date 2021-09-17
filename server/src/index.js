const express = require('express');
const env = require('dotenv').config();
const app = express();
const port = process.env.PORT;
const host = process.env.HOST;



app.listen(port,host, () => {
    console.log(`Server is running on ${host}:${port}`);
});
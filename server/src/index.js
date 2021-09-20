const express = require('express');
const env = require('dotenv').config();
const app = express();
const port = process.env.PORT;
const host = process.env.HOST;
const user = process.env.MONGODB_USER
const pwd = process.env.MONGODB_PASSWORD
const db = process.env.MONGODB_DB
const mongoose = require('mongoose');

//routes
const routes = require('./routes/user')
//connecting database
mongoose.connect(`mongodb+srv://${user}:${pwd}@cluster0.xrml9.mongodb.net/${db}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Database connected successfully');
    });

//middleware

app.use(express.json());
app.use('/api', routes)
//requests



app.listen(port,host, () => {
    console.log(`Server is running on ${host}:${port}`);
});
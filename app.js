const express = require('express');
const app = express();
const mongoose = require('mongoose');
const boodyParser = require('body-parser');

const postsRoute = require('./routes/posts');

const port = process.env.PORT || 3000;

//Listening to the server
app.listen(port);

//Connecting to the database
const MONGODB_URL = process.env.MONGODB_URI || '';
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('Connected to the database!');
});

//Middlewares
app.use(boodyParser.json()); // Adding a parser to convert any request body to json
app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res) => {
    res.send('We are online baby!')
})
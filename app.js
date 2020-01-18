const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;
//Listening to the server
app.listen(port);

//Connecting to the database
const MONGODB_URL = process.env.MONGODB_URI || '';
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('Connected to the database!');
});


//Middlewares
// app.use('/', () => {
//     console.log('Middleware at home!');
// });


//Routes
app.get('/', (req, res) => {
    res.send('We are online baby!')
})
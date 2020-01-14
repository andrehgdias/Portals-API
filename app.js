const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
//Listening to the server
app.listen(port);

//Routes
app.get('/', (req, res) => {
    res.send('We are online baby!')
})
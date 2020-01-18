const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
//Listening to the server
app.listen(port);

//Middlewares
app.use('/', () => {
    console.log('Middleware at home!');
});



//Routes
app.get('/', (req, res) => {
    res.send('We are online baby!')
})
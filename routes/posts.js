const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('We are on posts baby!')
});

router.get('/status', (req, res) => {
    res.send('We are on posts STATUS baby!')
});

module.exports = router;
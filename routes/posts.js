const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('We os posts baby!')
});

module.exports = router;
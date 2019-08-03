const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');

const router = express.Router();

router.get('/static-images', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'public', 'views', 'static-images.html'));
});

router.get('/api-images', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'public', 'views', 'api-images.html'));
});


module.exports = router;
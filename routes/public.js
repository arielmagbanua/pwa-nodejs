const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'index.html'));
});

router.get('/best-images', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'best-images.html'));
});

module.exports = router;
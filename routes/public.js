const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');

const router = express.Router();

// home or index route
router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'public', 'views', 'index.html'));
});

router.get('/static-images', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'public', 'views', 'static-images.html'));
});


module.exports = router;
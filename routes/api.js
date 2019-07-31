const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');

const router = express.Router();

router.get('/images', (req, res, next) => {
    res.send({
        "albumTitle": "Zeald Family Day",
        "images": [
            {
                "path": "images/20190713-zeald-fam-5.jpg"
            },
            {
                "path": "images/20190713-zeald-fam-23.jpg"
            },
            {
                "path": "images/20190713-zeald-fam-26.jpg"
            },
            {
                "path": "images/20190713-zeald-fam-28.jpg"
            },
            {
                "path": "images/20190713-zeald-fam-57.jpg"
            },
            {
                "path": "images/20190713-zeald-fam-100.jpg"
            },
            {
                "path": "images/20190713-zeald-fam-118.jpg"
            },
            {
                "path": "images/20190713-zeald-fam-126.jpg"
            },
            {
                "path": "images/20190713-zeald-fam-128.jpg"
            },
            {
                "path": "images/20190713-zeald-fam-171.jpg"
            },
            {
                "path": "images/20190713-zeald-fam-178.jpg"
            },
            {
                "path": "images/20190713-zeald-fam-180.jpg"
            },
            {
                "path": "images/20190713-zeald-fam-189.jpg"
            },
            {
                "path": "images/20190713-zeald-fam-190.jpg"
            },
            {
                "path": "images/20190713-zeald-fam-221.jpg"
            }
        ]
    });
});

module.exports = router;
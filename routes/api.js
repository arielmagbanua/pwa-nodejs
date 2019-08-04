const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
// const rootDir = require('../utils/path');

var Twitter = require('twitter');
 
var client = new Twitter({ 
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const router = express.Router();

router.get('/my-data', (req, res, next) => {
    // enable cors
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    res.send({
        "name": "Ariel Magbanua",
        "position": "Software Engineer",
        "company": "Zeald",
        "projects": [
            "Zest",
            "Zeald Flow",
            "LifeCare",
            "Selenium"
        ]
    })
});

router.get('/twitter/:twitterName/favorites', (req, res, next) => {
    client.get('favorites/list', {screen_name: req.params.twitterName})
        .then((tweets) => {
            res.send(tweets);
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });
});

module.exports = router;
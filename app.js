const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// parse request body
app.use(bodyParser.urlencoded({extended: false}));

// set a static directory
app.use(express.static(path.join(__dirname, 'public')));

const publicRoutes = require('./routes/public');
const apiRoutes = require('./routes/api');

app.use(publicRoutes);
app.use('/api', apiRoutes);

app.listen(9000);
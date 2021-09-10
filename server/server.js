require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/routes.js');
const db = require('../db/index.js');

const servingPath = path.join(__dirname, '..', 'client', 'dist');
app.use(express.static(servingPath));

app.use(bodyParser.json());

app.use('/', router)

module.exports.app = app;
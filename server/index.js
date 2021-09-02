require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes/routes.js');

const servingPath = path.join(__dirname, '..', 'client', 'dist');
app.use(express.static(servingPath));

app.use('/', router)
const port = 3000;
app.listen(port, () => {
  // console.log('ENV', process.env.NODE_ENV);
  console.log(`Listening on port http://localhost:${port}`);
});
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
require('dotenv').config();


const app = express();

app.use(routes);
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('Watcher Admin Running -> ')
})



module.exports = app;
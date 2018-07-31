const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const path = require('path');
require('dotenv').config();


const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(routes);

app.use('/css', express.static(path.join(__dirname, '/node_modules/bulma/css')))
app.use('/css', express.static(path.join(__dirname, '/public/css')));
app.use('/js', express.static(path.join(__dirname, '/public/js')));
app.set("views", "./src/views");
app.set("view engine", "ejs");



app.get('/', (req, res) => {
  res.render(
    'index',
    {
      title: 'Watcher'
    }
  );
})



module.exports = app;
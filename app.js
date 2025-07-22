
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

mongoose.connect('mongodb://localhost:27017/todoDB');


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

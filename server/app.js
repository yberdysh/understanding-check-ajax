const express = require('express');
const volleyball = require('volleyball');
const path = require('path');
const data = require('./data');
const app = express();

app.use(volleyball);
app.use(express.static(path.join(__dirname, '../public')));

app.get('/dogs', (req, res, next) => {
  res.send(data.dogs);
})

app.get('/cats', (req, res, next) => {
  res.send(data.cats);
})

app.get('/dragons', (req, res, next) => {
  res.send(data.dragons);
})

app.listen(3000, () => {
  console.log('I is listening.');
})

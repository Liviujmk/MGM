const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const router = express.Router();
const app = express();
const port = 3500;
const methodOverride = require('method-override')

app.use('/static', express.static('static'));
app.set('view engine','ejs');
//app.use(expressEjsLayout);
//BodyParser
app.use(express.urlencoded({extended : false}));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port || process.env.SERV_PORT || 3500, () => {
    console.log(`Server listening on port ${port}`)
})
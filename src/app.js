const path = require('path');
const express = require('express');
const app = express();
var home = require('./controllers/home');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.set('views', 'views');
app.set('view engine', 'ejs');


app.get('/', auth.check, home.get);

app.listen(3000, () => {
    console.log("App is running on port 3000");
})
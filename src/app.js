const path = require('path');
const express = require('express');
const app = express();
var home = require('./controllers/home');
var auth = require('./controllers/auth');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', home.get);
app.get('/login', auth.login.get);
app.post('/login', auth.login.post);


app.listen(3000, () => {
    console.log("App is running on port 3000");
})
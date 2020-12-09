const path = require('path');
const express = require('express');
const app = express();
var home = require('./controllers/home');
var auth = require('./controllers/auth');
var competition = require('./controllers/competition');
var profile = require('./controllers/profile');
var user = require('./controllers/user');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', auth.check, (req, res) => res.redirect('/home'));
app.get('/home', home.get);
app.get('/homeplus', home.post);
app.get('/login', auth.login.get);
app.post('/login', auth.login.post);
app.get('/logout', auth.logout.post);
app.get('/contest', competition.contest.get);
app.get('/ranking', competition.ranking.get);
app.get('/profile', profile.get);
app.get('/user', user.get);


app.listen(3000, () => {
    console.log("App is running on port 3000");
})
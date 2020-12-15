const path = require('path');
const express = require('express');
const app = express();

const database = require('./model/data');
var home = require('./controllers/home');
var auth = require('./controllers/auth');
var competition = require('./controllers/competition');
var profile = require('./controllers/profile');
var user = require('./controllers/user');
var notification = require('./controllers/notification');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', auth.check, home.get);
app.get('/home', home.get);
// app.get('/homeplus', home.post);

app.get('/contest', auth.check, competition.contest.get);
app.get('/ranking', auth.check, competition.ranking.get);
app.get('/profile', auth.check, profile.get);
app.get('/user', auth.check, user.get);
app.get('/notification', auth.check, notification.get);

app.get('/login', auth.login.get);
app.post('/login', auth.login.post);
app.get('/logout', auth.logout.post);


app.listen(3000, () => {
    console.log("App is running on port 3000");
})
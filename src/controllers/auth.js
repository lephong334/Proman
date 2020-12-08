const axios = require('axios');
const url = 'http://localhost:5000';
var err = '';
var store = require('store')

exports.check = (req, res) => {
  if (store.get('user').username == "admin"
      && store.get('user').password == "admin") {
      res.redirect('/homeplus');
  } else {
    res.redirect('/home');
  }
};

exports.login = {};

exports.login.get = (req, res) => {
  res.render('login', {
    error: err
  });
};

exports.login.post = (req, res) => {
  if (req.body.username == "admin"
    && req.body.password == "admin") {
      store.set('user', {
        username: req.body.username,
        password: req.body.password
      });
    res.redirect('/homeplus');
  } else {
    res.redirect('/login');
  }

  // var user = {
  //     "email": req.body.email,
  //     "password": req.body.password
  // };
  // var requestURL = host + apiURL + "/login";
  // axios.post(requestURL, user)
  //     .then(function (response) {
  //         console.log(response);
  //         authToken = response.data.token;
  //         res.redirect('/user');
  //     })
  //     .catch(function (error) {
  //         console.log(error);
  //         err = error.response.status;
  //         res.redirect('/login');
  //     });
};

exports.logout = {};
exports.logout.post = (req, res) => {
  store.clearAll();
  res.redirect('/');
};
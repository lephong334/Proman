const axios = require('axios');
const url = 'http://localhost:5000';
var database = require('../model/data');

var err = '';
var currentuser = '';

exports.check = (req, resp, next) => {
  if (currentuser !== null || currentuser !== '') {
    next();
  } else {
    resp.redirect('/login');
  }
};

exports.login = {};

exports.login.get = (req, resp) => {
  err = '';
  resp.render('login', {
    error: err
  });
};

exports.login.post = (req, resp) => {
  database.userAccounts.forEach(account => {
    if (req.body.username == account.username && req.body.password == account.password) {
      currentuser.username = req.body.username;
      currentuser.password = req.body.password;
      resp.redirect('/');
    } else {
        err = "Oops! Something went wrong.";
        resp.render('login', {
          error: err
        });
    }
});
};

exports.logout = {};
exports.logout.post = (req, res) => {
  currentuser = '';
  res.redirect('/login');
};
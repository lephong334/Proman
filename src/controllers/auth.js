const axios = require('axios');
const url = 'http://localhost:5000';
var database = require('../model/data');

var err = '';
var currentuser = '';

exports.check = (req, res, next) => {
  if (currentuser !== null && currentuser !== '') {
    next();
  } else {
    res.redirect('/login');
  }
};

exports.login = {};

exports.login.get = (req, res) => {
  err = '';
  res.render('login', {
    error: err
  });
};

exports.login.post = (req, res) => {
  database.userAccounts.forEach(account => {
    if (req.body.username == account.username && req.body.password == account.password) {
      currentuser.username = req.body.username;
      currentuser.password = req.body.password;
      res.redirect('/');
    } else {
        err = "Oops! Something went wrong."
        res.render('login', {
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
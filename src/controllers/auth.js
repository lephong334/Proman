const axios = require('axios');
const url = 'http://localhost:5000';
var database = require('../model/data');

var err = '';
let currentuser = '';

exports.check = (req, resp, next) => {
  if (currentuser == '') {
    resp.redirect('/login');
  } else {
    next();
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
      currentuser = req.body.username;
      resp.redirect('/home');
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
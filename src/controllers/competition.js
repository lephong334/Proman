const axios = require('axios');
const url = 'http://localhost:5000';
let database = require('../model/data');

exports.contest = {};

exports.contest.get = (req, res) => {
  res.render('contest', {
    contest: database.contest
  });
};

exports.ranking = {};

exports.ranking.get = (req, res) => {
  res.render('ranking', {
    ranking: database.ranking
  });
};
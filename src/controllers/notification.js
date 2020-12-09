const axios = require('axios');
const url = 'http://localhost:5000';
let database = require('../model/data');

exports.get = (req, res) => {
    res.render('notification', {
        posts: database.posts
    });
};

exports.post = (req, res) => {
    res.render('notification', {
        posts: database.posts
    });
};
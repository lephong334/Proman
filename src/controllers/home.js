const axios = require('axios');
const url = 'http://localhost:5000';

exports.get = (req, res) => {
    res.render('homepage');
};
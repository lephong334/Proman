const axios = require('axios');
const url = 'http://localhost:5000';
var err = '';

exports.check = (req, res) => {
    
};

exports.login = {};

exports.login.get = (req, res) => {
    res.render('login', {
        error: err
    });
};

exports.login.post = (req, res) => {
    var user = {
        "email": req.body.email,
        "password": req.body.password
    };
    var requestURL = host + apiURL + "/login";
    axios.post(requestURL, user)
        .then(function (response) {
            console.log(response);
            authToken = response.data.token;
            res.redirect('/user');
        })
        .catch(function (error) {
            console.log(error);
            err = error.response.status;
            res.redirect('/login');
        });
};

exports.logout = {};
exports.logout.post = (req, res) => {
    
};
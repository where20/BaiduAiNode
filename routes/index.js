const express = require('express');
const router = express.Router;
const AipImage = require('./AipImage');

module.exports = function(app) {
    app.get('/', function(req, res) {
        var options = {
            baike_num: 5
        }
        AipImage.getResult(res, './assets/xingdong.jpeg', options);
    });
    app.get('/advancedGeneral', AipImage.advancedGeneral);
}
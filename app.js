const express = require('express');
const routes = require('./routes');
global.myConfig = require('./config');
// const request = require('request');
const bodyParser = require('body-parser');

global.nodeServer = require('./routes/node_ocr_baidu');
global.aipImage = require('./routes/AipImage');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

//把app通过传参的方式传到index.js中
routes(app);

app.listen(myConfig.port, function(req, res) {
    console.log('Your server is running on port: ' +  'localhost:' + myConfig.port);
});

app.get('/test', function(req, res) {
    var options = {
        baike_num: 5
    }
    global.aipImage.getResult(res, './assets/xingdong.jpeg', options);
});
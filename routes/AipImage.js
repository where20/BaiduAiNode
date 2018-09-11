var fs = require('fs');
var AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;

var APP_ID = "11802748";
var API_KEY =  "qY0VAH0ltIRSIGdoFbyntlOK";
var SECRET_KEY =  "d3Yh6b8ue2NT7x9vIzklvalGGvHiefTO";

var imgClent = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY);

exports.getResult = function(res, imgName, options) { 
    var image = fs.readFileSync(imgName);
    var base64Img = new Buffer(image).toString('base64');
    imgClent.advancedGeneral(base64Img, options).then(function(result) {
        res.json(result);
    });
}
//通用物体识别
exports.advancedGeneral = function(req, res) { 
    var options = {
        baike_num: 5
    };
    console(req.body);
    imgClent.advancedGeneral(req.body.base64Img, options).then(function(result) {
        res.json(result);
    });
}
//菜品识别
exports.dishDetect = function(req, res) {

}
//车辆识别
exports.carDetect = function(req, res) {
    
}
//logo商标识别
exports.logoSearch = function(req, res) {
    
}
//动物识别
exports.animalDetect = function(req, res) {
    
}
//植物识别
exports.plantDetect = function(req, res) {
    
}
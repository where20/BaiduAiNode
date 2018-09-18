var fs = require('fs');
var AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;

var APP_ID = "11802748";
var API_KEY =  "qY0VAH0ltIRSIGdoFbyntlOK";
var SECRET_KEY =  "d3Yh6b8ue2NT7x9vIzklvalGGvHiefTO";

var client = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY);

//图片识别
exports.imgDetect = function(apiType, image, res) {
    console.log('apiType', apiType);
    switch(apiType) {
        case 'dish': //菜品识别
            // 如果有可选参数
            var options = {};
            options["top_num"] = "3";
            options["filter_threshold"] = "0.7";
            options["baike_num"] = "5";
            // 带参数调用菜品识别
            client.dishDetect(image, options).then(function(result) {
                console.log(JSON.stringify(result));
                res.json(result);
            }).catch(function(err) {
                // 如果发生网络错误
                console.log('dish', err);
            });
            break;
        case 'car': //车辆识别
            // 如果有可选参数
            var options = {};
            options["top_num"] = "3";
            options["baike_num"] = "5";
            // 带参数调用车辆识别
            client.carDetect(image, options).then(function(result) {
                console.log(JSON.stringify(result));
                res.json(result);
            }).catch(function(err) {
                // 如果发生网络错误
                console.log('car', err);
            });
            break;
        case 'plant': //植物识别
            // 如果有可选参数
            var options = {};
            options["baike_num"] = "5";

            // 带参数调用植物识别
            client.plantDetect(image, options).then(function(result) {
                console.log(JSON.stringify(result));
                res.json(result);
            }).catch(function(err) {
                // 如果发生网络错误
                console.log('plant', err);
            });
            break;
        case 'animal': //动物识别
            // 如果有可选参数
            var options = {};
            options["top_num"] = "3";
            options["baike_num"] = "5";

            // 带参数调用动物识别
            client.animalDetect(image, options).then(function(result) {
                console.log(JSON.stringify(result));
                res.json(result);
            }).catch(function(err) {
                // 如果发生网络错误
                console.log('animal', err);
            });;
            break;
        case 'logo': //logo商标识别
            // 如果有可选参数
            var options = {};
            options["custom_lib"] = "false";

            // 带参数调用logo商标识别
            client.logoSearch(image, options).then(function(result) {
                console.log(JSON.stringify(result));
                res.json(result);
            }).catch(function(err) {
                // 如果发生网络错误
                console.log('logo', err);
            });;
            break;
        case 'general':
            var options = {
                baike_num: 5
            };
            client.advancedGeneral(image, options).then(function(result) {
                res.json(result);
            });
            break;
        default:
            
            res.json('无法识别')
    }
}
exports.getResult = function(res, imgName) { 
    var image = fs.readFileSync(imgName);
    var base64Img = new Buffer(image).toString('base64');
    client.plantDetect(base64Img).then(function(result) {
        res.json(result);
    });
}

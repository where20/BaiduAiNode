
var AipOcrClient = require("baidu-aip-sdk").ocr;

var APP_ID = "11801893";
var API_KEY =  "utGjXdshWKAWlGvtXxOgX73D";
var SECRET_KEY =  "UChGdvxfoPIFmTi5aRYDMjRPDkXjKvhZ";

var client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY);

var fs = require('fs');

module.exports = { 
	getResult : function(res,imgName){
		var image = fs.readFileSync(imgName);
		var base64Img = new Buffer(image).toString('base64');
		client.generalBasic(base64Img).then(function(result) {
	    	console.log(JSON.stringify(result));
	    	res.json(result);
		});
	}
}
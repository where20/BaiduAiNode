const AipImage = require('./AipImage');
const upload = require('./upload');

module.exports = function(app) {
    app.get('/', function(req, res) {
        var options = {
            baike_num: 5
        }
        AipImage.getResult(res, './assets/plant.jpeg', options);
    });
    app.get('/advancedGeneral', AipImage.advancedGeneral);
    //单文件上传，多文件上传参考https://github.com/expressjs/multer
    app.post('/rest/detect', upload.single('file'), function(req, res) { 
        if (req.file) {
            console.log('query', req.query);
            console.log('file', req.file);
            console.log(req.body); //其他参数
            // console.log('base64', req.query.aipType, req.file.buffer.toString('base64'));
            /* 输出示例
            {
            fieldname: 'file', 提交的参数名称，例如需form的input[name=file]
            originalname: 'Hydra.jpg',
            encoding: '7bit',
            mimetype: 'image/png',
            destination: './www/img',
            filename: 'Hydra.jpg'
            path: 'www\\img\\Hydra.jpg',
            size: 264794 
            }*/
           
            AipImage.imgDetect(req.query.apiType, req.file.buffer.toString('base64'), res);
            // res.send('upload success');
        }

    });
}
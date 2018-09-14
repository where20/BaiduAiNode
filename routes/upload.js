const multer  = require('multer');

/* config the multer storage */
var storage = multer.diskStorage({
   
    destination: function (req, file, cb) {
        cb(null, './public')
    },
    filename: function (req, file, cb) {
        console.log('req', req.query)
        cb(null, file.originalname) //用图片原始名字，遇到名字重复会覆盖
    }
});
var upload = multer();

module.exports = upload;
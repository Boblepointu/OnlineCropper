const Q = require("q");
const Jimp = require("jimp");
const Express = require("express");
const FileUpload = require('express-fileupload');
const RevHash = require('rev-hash');

const Config = require("./config.json");

const Toolbox = {
  cropImage: (imageObject, cropObject) => {
    return new Promise((resolve, reject) => {
      Jimp.read(imageObject.data, function (err, image) {
        if(err){
          reject(err);
          return;
        }
        var w = image.bitmap.width;
        var h = image.bitmap.height;

        var x = cropObject.x * w / 100;
        var width = cropObject.width * w / 100;
        var y = cropObject.y * h / 100;
        var height = cropObject.height * h / 100;

        var croppedImage = image.crop(x, y, width, height);
        //croppedImage.write('./upload/test.png');
        resolve(croppedImage);
      });
    });
  },
  saveImageFile: imageFile => {
    return new Promise((resolve, reject) => {
      var imageHash = RevHash(imageFile.data)+(new Date().getTime());
      var extension = 'png';
      var typeSplit = imageFile.mimetype.split('/')[1];
      var filePath = `./upload/${imageHash}.${typeSplit}`;
      imageFile.mv(filePath, err => {
        if(err){
          reject(err);
          return;
        }
        resolve({imageHash:imageHash, filePath:filePath, data:imageFile.data});
      });
    });
  },
  getJimpImageB64: (imageObject, imageType) => {
    if(!imageType) imageType = 'image/png'
    return new Promise((resolve, reject) => {
      try{
        imageObject.getBase64(imageType, (err, res) => {
            if(err){
              reject(err);
              return;
            }
            resolve(res);
        });
      }catch(e){console.log(e); reject(e);}
    });
  }
};


var App = Express();

App.use(FileUpload());

App.use('/', Express.static(__dirname + '/www/build/'));

App.post('/crop', function (req, res, next) {
  if (!req.files || !req.files.imageFile || !req.body.cropObject) return res.status(400).send('No files were uploaded.');
  Q.async(function*(){
    try{
      var cropObject = JSON.parse(req.body.cropObject);
      var croppedImage = yield Toolbox.cropImage(req.files.imageFile, cropObject);
      var imageBuff = yield Toolbox.getJimpImageB64(croppedImage);
      res.end(imageBuff);
    }catch(e){console.log(e); res.end('error !');}
  })().done();
});

App.listen(Config.httpPort);

console.log(`Static http server waiting on port ${Config.httpPort}`)

var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var http = require('http'),
    https = require('https'),
    bodyParser = require('body-parser'),
    errorhandler = require('errorhandler'),
    querystring = require('querystring'),
    cookieParser = require('cookie-parser'),
    multer = require('multer'),
    session = require('express-session'),
    fs = require('fs'),
    crypto = require('crypto');

app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(errorhandler());

app.use(multer({ dest: '../uploads/'}).single('fileToUpload'));

router.get("/",function(req,res){
  res.sendFile("index.html");
});


app.use("/",router);


app.listen(80,function(){
  console.log(app.settings.env + ';__dirname:' + __dirname + ';');
  console.log('SSRCP Server started @Port : ' + this.address().port);
});

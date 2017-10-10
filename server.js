var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var api = require('./router/api');
var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api',api);
app.listen(3000, ()=>{
	console.log('listning on 3000');
});
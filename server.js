'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');
var bodyParser = require('body-parser')

var app = express();

// Configure server to parse JSON for us
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/public', express.static(process.cwd() + '/public'));

routes(app);

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});

'use strict';

var moment = require('moment');
moment().format();

var path = process.cwd();

module.exports = function (app) {
	
	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});
		
	app.route('/api/whoami')
		.get(function (req, res) {
			var ipaddress = req.headers['x-forwarded-for'];
			var language = req.headers['accept-language'].split(',')[0];
			var software = /\(([^)]+)\)/.exec(req.headers['user-agent'])[1];
			
			var finalData = {
				ipaddress: ipaddress,	
				language: language,
				software: software
			};
			
			res.json(finalData);
		});
};

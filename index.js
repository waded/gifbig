var express = require('express');
var https = require('https');

var app = express();

app.use('/', function(req, res) {
	res.end('gifsmall');
});

app.listen(process.env.PORT || 8888);
var express = require('express');
var https = require('https');

var app = express();

app.use('/big', function(req, res) {
	res.end('<html><head><style>body { background-image: url(\'' 
		+ req.query.url
		+ '\'); background-repeat:no-repeat; background-size:contain; background-position:center; }</style><body></body></html>');
});

app.listen(process.env.PORT || 8888);
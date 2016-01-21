var http = require('http');
var express = require('express');
var app = express();
var config = require('./config/config')();
require('./config/express')(app);
require('./config/passport')();
require('./config/database.js')(config.db);

http.createServer(app).listen(config.port, config.address, function(){
    console.log('Express server escutando em '+config.address+' ('+config.env+') na porta '+config.port);
});
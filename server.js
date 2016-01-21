var http = require('http');
var express = require('express');
var app = express();
require('./config/express')(app);
require('./config/passport')();
require('./config/database.js')('mongodb://localhost/contatooh');

http.createServer(app).listen(config.port, config.address, function(){
    console.log('Express server escutando em '+config.address+' ('+config.env+') na porta '+config.port);
});
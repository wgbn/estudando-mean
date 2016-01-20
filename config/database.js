var mongoose = require('mongoose');

module.exports = function(uri){
    mongoose.connect(uri);

    mongoose.connection.on('connected', function(){
        console.log('mongoose conectado em: '+uri);
    });
    mongoose.connection.on('disconnected', function(){
        console.log('mongoose desconectado de: '+uri);
    });
    mongoose.connection.on('error', function(erro){
        console.log('mongoose erro na conexão: '+erro);
    });

    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log('mongoose desconectado pelo termino da aplicacao');
            process.exit(0);
        });
    });
};
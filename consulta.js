var MongoClient = require('mongodb').MongoClient;
var ObjectId    = require('mongodb').ObjectID;

var _idC = new ObjectId('569fb016cc65d26038fa2960');

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh',
function(erro, db){
    if (erro) throw err;

    db.collection('contatos').findOne({_id: _idC}, function(erro, contato){
        if (erro) throw err;
        console.log(contato);
    });
});
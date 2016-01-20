var contatos = [
    {_id: 1, nome: 'contato 1', email: 'contato1@gmail.com'},
    {_id: 2, nome: 'contato 2', email: 'contato2@gmail.com'},
    {_id: 3, nome: 'contato 3', email: 'contato3@gmail.com'},
];

module.exports = function(){
    var controller = {};

    controller.listaContatos = function(req, res){
        console.log('/contatos');
        res.json(contatos);
    };

    controller.obtemContatos = function(req, res){
        console.log('/contatos/'+req.params.id);
        var _id = req.params.id;
        var contato = contatos.filter(function(contato){
            return contato._id == _id;
        })[0];

        contato ? res.json(contato) : res.status(404).send('contato não encontrado');
    };

    return controller;
};
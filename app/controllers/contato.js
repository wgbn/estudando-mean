var contatos = [
    {_id: 1, nome: 'contato 1', email: 'contato1@gmail.com'},
    {_id: 2, nome: 'contato 2', email: 'contato2@gmail.com'},
    {_id: 3, nome: 'contato 3', email: 'contato3@gmail.com'},
];

module.exports = function(){
    var controller = {};
    var ID_CONTATO_INC = 3;

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

        contato ? res.json(contato) : res.sendStatus(404).send('contato não encontrado');
    };

    controller.removeContato = function(req, res){
        console.log('/contatos/'+req.params.id);
        var idContato = req.params.id;
        contatos = contatos.filter(function(contato){
            return contato._id != idContato;
        });
        res.sendStatus(204).end();
    };

    controller.salvaContato = function(req, res){
        var contato = req.body;
        contato = contato._id ? atualiza(contato) : adiciona(contato);
        res.json(contato);
    };

    function adiciona(_contato){
        _contato._id = ++ID_CONTATO_INC;
        contatos.push(_contato);
        return _contato;
    }

    function atualiza(_contato){
        contatos = contatos.map(function(contato){
            if (contato._id == _contato._id)
                contato = _contato;
            return contato;
        });
        return _contato;
    }

    return controller;
};
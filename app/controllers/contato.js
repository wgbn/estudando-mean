module.exports = function(app){
    var Contato = app.models.contato;
    var controller = {};

    controller.listaContatos = function(req, res){
        Contato.find().populate('emergencia').exec()
            .then(function success(contatos){
                res.json(contatos);
            }, function error(erro){
                console.log(erro);
                res.status(500).json(erro);
            });
    };

    controller.obtemContatos = function(req, res){
        var _idC = req.params.id;
        Contato.findById(_idC).exec()
            .then(function success(contato){
                if (!contato) throw new Error("Contato não encontrado");
                res.json(contato);
            }, function error(erro){
                console.log(erro);
                res.status(404).json(erro);
            });
    };

    controller.removeContato = function(req, res){
        var _idC = req.params.id;
        Contato.remove({"_id": _idC}).exec()
            .then(function success(){
                res.end();
            }, function error(erro){
                console.log(erro);
                res.status(500).json(erro);
            });
    };

    controller.salvaContato = function(req, res){
        var _idC = req.body._id;
        req.body.emergencia = req.body.emergencia || null;

        if (_idC){
            Contato.findByIdAndUpdate(_idC, req.body).exec()
                .then(function success(contato){
                    res.json(contato);
                }, function error(erro){
                    console.log(erro);
                    res.status(500).json(erro);
                });
        } else {
            Contato.create(req.body)
                .then(function success(contato){
                    res.status(201).json(contato);
                }, function error(erro){
                    console.log(erro);
                    res.status(500).json(erro);
                });
        }
    };

    return controller;
};
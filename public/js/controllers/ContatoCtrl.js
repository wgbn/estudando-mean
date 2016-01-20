angular.module('contatooh').controller('ContatoCtrl', function($scope, $routeParams, Contato){
    // variáveis locais

    // escopo
    $scope.contato = {};
    $scope.contatos = [];
    $scope.mensagem = {texto: ''};

    $scope.salva = function(){
        $scope.contato.$save()
            .then(function(){
                $scope.mensagem.texto = "Salvo com sucesso!";
                $scope.contato = new Contato();
            })
            .catch(function(erro){
                console.log(erro);
                $scope.mensagem.texto = "Não foi possível salvar";
            });
    };

    if ($routeParams.contatoId){
        Contato.get({id: $routeParams.contatoId},
            function success(contato){
                $scope.contato = contato;
            }, function error(erro){
                $scope.mensagem = {texto: "Não foi possível obter contato"};
                console.log(erro);
            });
    } else {
        $scope.contato = new Contato();
    }

    Contato.query(function(contatos){
        $scope.contatos = contatos;
    });

});
angular.module('contatooh').controller('ContatosCtrl', function($scope, Contato){
    // variáveis locais

    // escopo
    $scope.filtro = '';
    $scope.contatos = [];
    $scope.mensagem = {texto: ''};

    $scope.remove = function(contato){
        Contato.delete({id: contato._id}, buscaContatos, function error(erro){
            $scope.mensagem = {texto: "Não foi possível remover o contato"};
            console.error(erro);
        });
    };

    // funções locais
    function buscaContatos(){
        Contato.query(function success(contatos){
            $scope.contatos = contatos;
            $scope.mensagem = {texto: ''};
        }, function error(erro){
            $scope.mensagem = {texto: "Não foi possível obter a lista de contatos"};
            console.error(erro);
        });
    }

    // inicialização do controller
    $scope.init = function(){
        buscaContatos();
    };
    $scope.init();
});
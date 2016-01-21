angular.module('meusComponentes', [])
    .directive('meuPainel', function(){
        return {
            restrict: "EA",
            templateUrl: 'js/directives/meus-componentes/meu-painel.html',
            transclude: true,
            scope: {
                titulo: '@',
            }
        };
    })
    .directive('meuBotaoAviso', function(){
        return {
            restrict: "E",
            template: '<button ng-click="clicou()" class="btn btn-warning">{{nome}}</button>',
            scope: {
                nome: '@',
                acao: '&'
            },
            link: function(scope){
                scope.clicou = function(){
                    if (confirm('Tem certeza que deseja excluir este contato?')){
                        scope.acao();
                    }
                };
            }
        };
    })
    .directive('meuFocus', function(){
        return {
            restrict: "A",
            scope: {
                evento: '@'
            },
            link: function(scope, element){
                scope.$on(scope.evento, function(){
                    element[0].focus();
                });
            }
        };
    });
angular.module('contatooh', ['ngRoute', 'ngResource'])
    .config(function($routeProvider){
        $routeProvider
            .when('/contatos', {
                templateUrl: 'paginas/contatos.html',
                controller: 'ContatosCtrl'
            })
            .when('/contato', {
                templateUrl: 'paginas/contato.html',
                controller: 'ContatoCtrl'
            })
            .when('/contato/:contatoId', {
                templateUrl: 'paginas/contato.html',
                controller: 'ContatoCtrl'
            })
            .otherwise({redirectTo: '/contatos'})
        ;
    })
;
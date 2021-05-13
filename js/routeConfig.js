var app = angular.module('myapp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'pages/home.html',
            controller: 'HomeController'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'pages/about.html',
            controller: 'AboutController'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'pages/contact.html',
            controller: 'ContactController'
        });
});

app.controller('HomeController', function ($scope, $location) {
    $scope.message = 'Página Inicial';
    console.log($location.path())
});

app.controller('AboutController', function ($scope, $location) {
    $scope.message = 'Página Sobre';
});

app.controller('ContactController', function ($scope, $location) {
    $scope.message = 'Página de Contato';
});
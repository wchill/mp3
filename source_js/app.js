var app = angular.module('mp3',['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/list', {
            templateUrl : 'partials/list.html',
            controller: 'movielist'
        })
        .when('/gallery', {
            templateUrl : 'partials/gallery.html',
            controller: 'moviegallery'
        })
        .when('/gallery/:genre', {
            templateUrl : 'partials/gallery.html',
            controller: 'moviegallery'
        })
        .when('/details/:id', {
            templateUrl : 'partials/details.html',
            controller: 'moviedetails'
        })
        .otherwise({
            redirectTo: '/list'
        });
}) 

/**
 * Created by tunte on 27-Nov-14.
 */
var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){

    $routeProvider.when('/', {
        templateUrl: 'templates/test.html',
        controller: 'TestController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    });

}]);
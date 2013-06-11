'use strict';

var coderContest = angular.module('coderContest', []);

coderContest.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/home', {
      templateUrl: 'partials/home.html'
    });

    $routeProvider.otherwise({
      redirectTo: '/home'
    });

}]);

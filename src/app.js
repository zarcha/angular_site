/**
 * Created by Zach on 3/9/16.
 */
'use strict'

var app = angular.module('BMITracker', ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: "Ctrl"
    }).
    when('/register', {
      templateUrl: 'views/register.html',
      controller: 'RegisterCtrl',
      controllerAs: "Ctrl"
    }).
    otherwise({
      redirectTo: '/'
    });
  }]);

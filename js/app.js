"use strict";
var app = null;

(function(){
app = angular.module('calculator',['ngRoute','calculatorService','calculatorDirective','calculatorController']);

app.config(['$routeProvider',
function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'partials/calculator.html',
    controller: 'CalculatorCtrl'
  }).
  when('/about', {
    templateUrl: 'partials/about.html'

  }).
  otherwise({
    redirectTo: '/'
  });
}]);

})();

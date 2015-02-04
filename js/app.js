"use strict";
var app = null;

(function(){
app = angular.module('calculator',['gettext','ngRoute','calculatorService','calculatorDirective','calculatorController']);

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


angular.module('calculator').run(['gettextCatalog', function (gettextCatalog) {
    gettextCatalog.setStrings('ja_JP', {"Calculator":"\"電卓\"","RESET":"リセット"});
}]);


angular.module('calculator').run(function (gettextCatalog) {
    gettextCatalog.setCurrentLanguage('ja_JP');
});


})();

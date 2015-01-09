"use strict";

var calculatorDirective = angular.module('calculatorDirective',[]);

calculatorDirective.directive('calculatorUi', function(){
  return {
    restrict : "E",
    templateUrl : "view/calculator.html",
    controller : "CalculatorCtrl",
    alias : "cctrl"
  };
});

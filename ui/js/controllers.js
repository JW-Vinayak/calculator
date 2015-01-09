"use strict";

var calculatorController = angular.module('calculatorController',[]);

calculatorController.controller('CalculatorCtrl', function($scope,CalcService ){
  $scope.flow =CalcService.getFlow();
  $scope.result = CalcService.getResult();
  this.buttons = ["7","8","9","/","4","5","6","*","1","2","3","-",".","0","=","+"];
  this.perform = function(val) {
    CalcService.perform(val);
    this.updateValues();
  };
  this.reset = function() {
    CalcService.reset();
    this.updateValues();
  };
  this.updateValues = function(){
    $scope.flow =CalcService.getFlow();
    $scope.result = CalcService.getResult();
  };
});

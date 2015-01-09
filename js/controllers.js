"use strict";

var calculatorController = angular.module('calculatorController',[]);

calculatorController.controller('CalculatorCtrl', function($scope,CalcService ){
  $scope.flow =CalcService.getFlow();
  $scope.result = CalcService.getResult();
  $scope.buttons = ["7","8","9","/","4","5","6","*","1","2","3","-",".","0","=","+"];
  $scope.perform = function(val) {
    CalcService.perform(val);
    this.updateValues();
  };
  $scope.reset = function() {
    CalcService.reset();
    this.updateValues();
  };
  $scope.updateValues = function(){
    $scope.flow =CalcService.getFlow();
    $scope.result = CalcService.getResult();
  };
});

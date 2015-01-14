"use strict";

var calculatorController = angular.module('calculatorController',[]);

calculatorController.controller('CalculatorCtrl', function($scope,CalcService, IPC ){
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
  IPC.ipc.on('reset', function(arg) {
    $scope.$apply(function(){
      $scope.reset();
    })
  });
});

calculatorController.controller('MenuClickHandler', function($scope, IPC){
  IPC.ipc.on('changeUrl', function(url) {
    $scope.goToView(url);
  });
  IPC.ipc.on('pick_folder', function(arg) {
    alert("you picked : " + arg.toString());
  });
  $scope.goToView = function(url){
    window.location = url;
  };
});

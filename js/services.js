"use strict";

var calculatorService = angular.module('calculatorService', []);
calculatorService.service("CalcService", function(){
  var result = "0",
  flow = "";
  this.currentOp = "";
  this.opChangeFlag = false;
  this.resultFlag = false;
  this.getFlow = function() {
    return flow;
  };
  this.getResult = function(){
    return result;
  };
  this.reset = function() {
    flow = "";
    result = "0";
    this.opChangeFlag = false;
    this.resultFlag = false;
  };
  this.perform = function(val){
    if (["1","2","3","4","5","6","7","8","9","0","."].indexOf(val) > -1) {
      if (this.resultFlag) {
        this.resultFlag = false;
        this.reset();
        result = val;
      } else if (this.opChangeFlag) {
        this.opChangeFlag = false;
        result = val;
      } else {
        if (result == "0" && val !== ".") {
          result = val;
        } else {
          if (val == "." && result.toString().indexOf(".") > -1)
            return false;

            result = result + val;
          }
        }
      } else if (["+","-","*","/"].indexOf(val) > -1) {
        if (["+","-","*","/"].indexOf(flow.toString().charAt(flow.toString().length -1)) > -1 && result == "0") {
          flow = flow.substring(0,flow.toString().length-1) + val;
          return false;
        }
        this.opChangeFlag = true;
        if (this.resultFlag) {
          this.resultFlag = false;
          flow =  result + val;
        } else
          flow = flow + result + val;

          result = "0";
      } else if (val == "=") {
          flow = flow + result;
          try {
            var temp = eval(flow);
            if (temp.toString().indexOf(".")> -1)
              temp = temp.toFixed(4);
              result = temp;
              this.resultFlag = true;
            }
            catch(e) {
              result = "Wrong Input. Please reset.";
            }
      }
  };
});

calculatorService.service('IPC', function( $location){
  try{
    this.ipc = require('ipc');
  }
  catch(e) {
    // do nothing. This try-catch block is added so that unit tests run using Jasmine do not break when require method is not found,
    // as this method is part of atom shell app environment and not angular app'
  }
});

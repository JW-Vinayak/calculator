(function(){

var app = angular.module('calculator',[]);

app.service("TempCalc", function(){
  var result = flow = "";
    this.perform = function(val) {
    this.result = val;
    console.log("service result : " + this.result);
  };
});

app.controller('TempCalculatorCtrl',function($scope,TempCalc ){
  $scope.flow ="";
  $scope.result = "";
  this.buttons = ["7","8","9","/","4","5","6","*","1","2","3","-",".","0","=","+"];
  this.perform = function(val){
    //$scope.result = val;
    TempCalc.perform(val);
    //console.log("ctrl result " + $scope.result);
    //console.log($scope.result);
  };
});

app.service("CalcService", function(){
  this.var = "";
  this.flow = "";
  this.result = "";
  this.currentOp = "";
  this.resultEl = document.getElementById('result');
  this.flowEl = document.getElementById('flow');
  this.opChangeFlag = false;
  this.resultFlag = false;
  this.perform = function(val, flow, result){
    this.flow = flow;
    this.result = result;
    if(["1","2","3","4","5","6","7","8","9","0","."].indexOf(val) > -1){
      if (this.resultFlag) {
        this.resultFlag = false;
        this.reset();
        this.resultEl.innerHTML = val;
        this.result = val;
      }
      else if(this.opChangeFlag) {
        this.opChangeFlag = false;
        this.resultEl.innerHTML = val;
        this.result = val;
      }
      else {
        if(this.resultEl.innerHTML == "0" && val !== ".") {
          this.resultEl.innerHTML = val;
          this.result = val;
        }
        else {
          if(val == "." && this.resultEl.innerHTML.toString().indexOf(".") > -1)
            return false;
            this.resultEl.innerHTML = this.resultEl.innerHTML + val;
            this.result = this.resultEl.innerHTML;
          }
      }
    }
    else if(["+","-","*","/"].indexOf(val) > -1){
      if(["+","-","*","/"].indexOf(this.flowEl.innerHTML.toString().charAt(this.flowEl.innerHTML.toString().length -1)) > -1 && this.resultEl.innerHTML == "0"){
        this.flowEl.innerHTML = this.flowEl.innerHTML.substring(0,this.flowEl.innerHTML.toString().length-1) + val;
        return false;
      }
      this.opChangeFlag = true;
      if(this.resultFlag){
        this.resultFlag = false;
        this.flow =  this.resultEl.innerHTML + val;
      }
      else
        this.flow = this.flow + this.resultEl.innerHTML + val;

        this.flowEl.innerHTML = this.flow;
        this.resultEl.innerHTML = "0";
      }
      else if(val == "=") {
        this.flow = this.flow + this.resultEl.innerHTML;
        this.flowEl.innerHTML = this.flow;
        try {
          var temp = eval(this.flow);
          if(temp.toString().indexOf(".")> -1)
            temp = temp.toFixed(4);
            this.resultEl.innerHTML = temp ;
            this.resultFlag = true;
          }
          catch(e) {
            this.resultEl.innerHTML = "Wrong Input. Please reset.";
          }
        }
    //console.log("val : " + val + " flow : " + this.flow +  " result : " + this.result);
    };

    this.reset = function() {
      this.flow = "";
      this.result = "";
      this.flowEl.innerHTML = "&nbsp;";
      this.resultEl.innerHTML = "0";
      this.opChangeFlag = false;
      this.resultFlag = false;
    }
})

app.controller('CalculatorCtrl', function($scope,CalcService ){
  //this.var = "";
  $scope.flow = "";
  $scope.result = "";
  this.buttons = ["7","8","9","/","4","5","6","*","1","2","3","-",".","0","=","+"];
  this.perform = function(val) {

    CalcService.perform(val, $scope.flow, $scope.result);
  }
  this.reset = CalcService.reset();
  /*

  this.currentOp = "";
  this.resultEl = document.getElementById('result');
  this.flowEl = document.getElementById('flow');
  this.opChangeFlag = false;
  this.resultFlag = false;
  this.perform = function(val){

    if(["1","2","3","4","5","6","7","8","9","0","."].indexOf(val) > -1){
      if (this.resultFlag) {
        this.resultFlag = false;
        this.reset();
        this.resultEl.innerHTML = val;
      }
      else if(this.opChangeFlag) {
          this.opChangeFlag = false;
          this.resultEl.innerHTML = val;
      }
      else {
        if(this.resultEl.innerHTML == "0" && val !== ".")
          this.resultEl.innerHTML = val;
        else {
          if(val == "." && this.resultEl.innerHTML.toString().indexOf(".") > -1)
            return false;
          this.resultEl.innerHTML = this.resultEl.innerHTML + val;
          this.result = this.resultEl.innerHTML;
        }

      }
    }
    else if(["+","-","*","/"].indexOf(val) > -1){
      if(["+","-","*","/"].indexOf(this.flowEl.innerHTML.toString().charAt(this.flowEl.innerHTML.toString().length -1)) > -1 && this.resultEl.innerHTML == "0"){
        this.flowEl.innerHTML = this.flowEl.innerHTML.substring(0,this.flowEl.innerHTML.toString().length-1) + val;
        return false;
      }
      this.opChangeFlag = true;
      if(this.resultFlag){
        this.resultFlag = false;
        this.flow =  this.resultEl.innerHTML + val;
      }
      else
        this.flow = this.flow + this.resultEl.innerHTML + val;

      this.flowEl.innerHTML = this.flow;
      this.resultEl.innerHTML = "0";
    }
    else if(val == "=") {
      this.flow = this.flow + this.resultEl.innerHTML;
      this.flowEl.innerHTML = this.flow;
      try {
        var temp = eval(this.flow);
        if(temp.toString().indexOf(".")> -1)
          temp = temp.toFixed(4);
        this.resultEl.innerHTML = temp ;
        this.resultFlag = true;
      }
      catch(e) {
        this.resultEl.innerHTML = "Wrong Input. Please reset.";
      }
    }
  };

  this.reset = function() {
    this.flow = "";
    this.result = "";
    this.flowEl.innerHTML = "&nbsp;";
    this.resultEl.innerHTML = "0";
    this.opChangeFlag = false;
    this.resultFlag = false;
  }
  */
});

app.directive('calculatorUi', function(){
  return {
    restrict : "E",
    templateUrl : "view/calculator.html",
    controller : "TempCalculatorCtrl",
    alias : "cctrl"
  };
});

})();

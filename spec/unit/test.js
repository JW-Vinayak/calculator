'use strict';

describe('Calculator controller', function() {

  beforeEach(module('calculator'));
  beforeEach(module('calculatorController'));

  describe('Test 1', function(){
    var scope, ctrl;

    beforeEach(inject(function( $rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('CalculatorCtrl', {$scope: scope});
    }));

    it('should create buttons array', function() {
      var data = ["7","8","9","/","4","5","6","*","1","2","3","-",".","0","=","+"];
      expect(scope.buttons).toEqual(data);
      expect(scope.buttons).toEqual(
        data);
      });

    it('should set the default value of result and flow', function() {
        expect(scope.result).toBe('0');
        expect(scope.flow).toBe('');
      });

    it('should multiply 9 and 5 and produce 45 as output', function(){
      scope.perform("9");
      scope.perform("*");
      scope.perform("5");
      scope.perform("=");
      expect(scope.result).toBe(45);
    })

  });
});

// this js file is used to communicate between atom shell app and angular app

(function(){

  function goToView(url){
    window.location = url;
  };

  try {
    var ipc = require('ipc');
    ipc.on('changeUrl', function(url) {
      console.log(url);
      goToView(url);
    });
    ipc.on('reset', function(arg) {
      /*function ControllerZero($scope, CalcService) {
      $scope.apply(function(){
        CalcService.reset(); // gets executed but doesnt change the view.
      });
      }*/
      var scope = angular.element(document.getElementById('reset')).scope();
        scope.$apply(function(){
          scope.reset();
      });
    });
  }
  catch(e) {
    // do nothing. This try-catch block is added so that unit tests run using Jasmine do not break when require method is not found,
    // as this method is part of atom shell ap environment and not angular app'
  }

})();

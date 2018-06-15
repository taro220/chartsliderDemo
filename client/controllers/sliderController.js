app.controller('sliderController', ['$scope', 'dateService', function($scope,dateService) {

  var vm = this;
  $scope.dateService = dateService;
  vm.updateValue = function() {

    dateService.val = vm.dateSlider.value;
  };

  vm.dateSlider = {
         value: 12,
         options: {
             floor: 0,
             ceil: 24,
             step: 0.1,
             precision: 2,
             enforceStep: false,
             onChange: vm.updateValue,
         }
  }

}]);

(function () {
  'use strict'

  angular
    .module('sommbuddy')
    .controller('ResultsController', ResultsController);

    function ResultsController($state, Selections, $ionicSlideBoxDelegate, $stateParams) {
      var vm = this;
      Selections.getWines($stateParams.price).then(function(wines) {
        vm.results = wines;
        $ionicSlideBoxDelegate.update();
        console.log('wines', wines);
      })
      vm.like = false;

      vm.like = function (wine) {
        vm.like = !vm.like;
        if (vm.like) {
          //insert wine
        } else {
          //remove wine
        }
      };
    }

})();

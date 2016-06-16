(function () {
  'use strict'

  angular
    .module('sommbuddy')
    .controller('ResultsController', ResultsController);

    function ResultsController($state, Selections, $ionicSlideBoxDelegate) {
      var vm = this;
      vm.results = Selections.wineResults();

      vm.nextSlide = function() {
        $ionicSlideBoxDelegate.next();
      }
    }

})();

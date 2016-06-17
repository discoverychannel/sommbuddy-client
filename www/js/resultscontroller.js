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
      })

      vm.liked = function (wine) {
        wine.like = !wine.like;

        if (wine.like) {
          Selections.insertWine(wine).then(function(item){
            vm.wineId = item.data[0];
          });
        } else {
          Selections.removeWine(wine).then(function(removed){
            return vm.removedQuantity = removed.data[0];
          });
        }
      };
    }

})();

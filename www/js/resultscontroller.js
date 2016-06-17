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
        // console.log('wines', wines);
      })
      vm.like = false;
      vm.liked = function (wine) {
        //check a method in loginService to see if user is logged in

        //if logged in = true, save insertWine(wine)
        vm.like = !vm.like;
        if (vm.like) {
          Selections.insertWine(wine).then(function(item){
            vm.wineId = item.data[0];
          });
        } else {
          Selections.removeWine(vm.wineId).then(function(item){
            vm.removedItem = item.data[0];
          });
        }
      };
    }

})();

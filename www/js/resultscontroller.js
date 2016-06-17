(function () {
  'use strict'

  angular
    .module('sommbuddy')
    .controller('ResultsController', ResultsController);

    function ResultsController($state, Selections, $ionicSlideBoxDelegate) {
      var vm = this;
      vm.results = Selections.wineResults();
      vm.like = false;

      // vm.nextSlide = function() {
      //   $ionicSlideBoxDelegate.next();
      // }
      // vm.slideHasChanged = function($index){
      //   alert('slideHasChanged $index=' + $index);
      //   if($index === 0){
      //
      //   }
      // };
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

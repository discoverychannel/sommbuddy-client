(function () {
  'use strict'

  angular
    .module('sommbuddy')
    .controller('MainController', MainController);

    function MainController($state, Selections) {
      var vm = this;
      var price = 0;

      vm.choice = function (val) {
        Selections.addVal(val);
        if (val == 90 || val == 10) {
          $state.go('foodtaste')
        } else if (val < 10) {
          $state.go('price')
        } else {
        $state.go('preference'+val);
        }
      }
      vm.price = function(val) {
        Selections.getWines(val);
        price = val;
        $state.go('result');
      }
    }

})();

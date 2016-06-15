(function () {
  'use strict'

  angular
    .module('sommbuddy')
    .controller('MainController', MainController);

    function MainController($state) {
      var vm = this;
      var userSelection = 0;
      var price = 0;

      vm.choice = function (val) {
        // console.log(val);
        userSelection += val;
        if (val == 90 || val == 10) {
          $state.go('foodtaste')
        } else if (val < 10) {
          $state.go('price')
        } else {
        $state.go('preference'+val);
        }
      }
      vm.price = function(val) {
        price = val;
        $state.go('result')
      }
    }

})();

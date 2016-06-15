(function () {
  'use strict'

  angular
    .module('sommbuddy')
    .controller('MainController', MainController);

    function MainController($state) {
      var vm = this;
      var userSelection = 0;

      vm.message = 'Are you endulging with food or not?';
      vm.foodYes = function () {
        userSelection += 100;
        console.log(userSelection);
        $state.go('preference1');
      }

      vm.animal = function() {
        userSelection += 40;
        console.log(userSelection);
      }


      // vm.foodNo = function() {
      //   userSelection += 200;
      //   console.log(userSelection);
      //   $state.go('preference2');
      // }

      // second question, with food yes
      vm.foodMessage = 'Are you preparing a heart attack or carrot sticks?';

    }

})();
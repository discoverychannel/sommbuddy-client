(function () {
  'use strict'

  angular
    .module('sommbuddy')
    .controller('MainController', MainController);

    function MainController() {
      var vm = this;
      //first question

      vm.message = 'Are you endulging with food or not?';
      vm.foodYes = function () {
        console.log('clicked');
        $location.path('/preference1');
      }

      // second question, with food yes
      vm.foodMessage = 'Are you preparing a heart attack or carrot sticks?';

    }

})();

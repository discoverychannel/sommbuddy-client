(function () {
  'use strict'

  angular
    .module('sommbuddy')
    .controller('MainController', MainController);

    function MainController() {
      var vm = this;
      vm.message = 'here is the main controller';
    }
})();

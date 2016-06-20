(function () {
  'use strict'

  angular
    .module('sommbuddy')
    .controller('MainController', MainController);

    function MainController($state, Selections, LoginService) {
      var vm = this;

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
        var priceurl = 'price'+val;
        $state.go('result', {price:priceurl});
      }
      vm.getList = function() {
          if (LoginService.loggedInStatus() === true) {
            $state.go('list');
          } else {
            $state.go('login');
          }
        }
      }

})();

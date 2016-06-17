(function () {
  'use strict'

  angular
    .module('sommbuddy')
    .controller('ListController', ListController);

    function ListController($state, Selections) {
      var vm = this;
      Selections.getWineList().then(function(data) {
        return vm.wineList = data.data;
      })
    }

})();

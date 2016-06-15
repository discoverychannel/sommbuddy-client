(function () {
  'use strict'

  angular
    .module('sommbuddy')
    .factory('Selections', Selections);

  function Selections($http) {

    var userSelection;

    return {
      addVal: function(val) {
        return userSelection += val;
      },
      getWines: function(price) {
        $http.get('filters.json').then(function(data){
          for(filters in data){
            if(filters.val == userSelection){
              return filters.filterCodes[Math.floor(Math.random()*filters.filterCodes.length)];
            }
          }
        })
        .then(function(filterCode) {
          $http.get('/filterCode' + price).then(function(d) {
            function Wine (name, grape, vineyard, vintage, region, price, picture){
              this.name = name,
              this.grape = grape,
              this.vineyard = vineyard,
              this.vintage = vintage,
              this.region = region,
              this.price = price,
              this.picture = picture,
            }

            var wine1 = new Wine(
              d.first.name,
              d.first.grape,
              d.first.vineyard,
              d.first.vintage,
              d.first.region,
              d.first.price,
              d.first.picture,
            );
          })
        })
      }
    }
  }
})();

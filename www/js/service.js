(function () {
  'use strict'

  angular
    .module('sommbuddy')
    .factory('Selections', Selections);

  function Selections($http) {

    var userSelection = 0;

    return {
      addVal: function(val) {
         userSelection += val;
         console.log(userSelection);
         return userSelection;
      },
      getWines: function(price) {
        $http.get('./js/filters.json').then(function(data){
          var filterObjs = JSON.parse(JSON.stringify(data)).data;
          filterObjs.forEach(function(filterObj){
            console.log(filterObj);
            if(filterObj.val == userSelection){
              console.log(filterObj.filterCodes.join('+'));
              return filterObj.filterCodes.join('+');
            }
          })
        })
        .then(function(filterCodes) {
          $http.get('/' + price + filterCodes).then(function(d) {
            function Wine (name, grape, vineyard, vintage, region, price, picture){
              this.name = name;
              this.grape = grape;
              this.vineyard = vineyard;
              this.vintage = vintage;
              this.region = region;
              this.price = price;
              this.picture = picture;
            }

            var wine1 = new Wine(
              d[0].Name,
              d[0].Varietal.Name,
              d[0].Vineyard.Name,
              d[0].Vintage,
              d[0].Appellation.Name + ', ' + d[0].Apellation.Region.Name,
              d[0].Price,
              d[0].Picture
            );
          })
        })
      }
    }
  }
})();

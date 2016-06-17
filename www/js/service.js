(function () {
  'use strict'
  app.factory('Selections', Selections);
  function Selections($http) {

    var userSelection = 0;
    var wines = [];

    function Wine (name, grape, vineyard, vintage, region, price, picture, storeUrl){
      this.name = name;
      this.grape = grape;
      this.vineyard = vineyard;
      this.vintage = vintage;
      this.region = region;
      this.price = price;
      this.picture = picture;
      this.storeUrl = storeUrl
    }

    return {
      addVal: function(val) {
         userSelection += val;
         return userSelection;
      },
      getWines: function(price) {
        var code;
        return $http.get('./js/filters.json').then(function(data){
          var filterObjs = JSON.parse(JSON.stringify(data)).data;
          filterObjs.forEach(function(filterObj){
            if(filterObj.val == userSelection){
              code = filterObj.filterCodes.join('+');
            }
          })
          return price + code;
        })
        .then(function(filterCodes) {
          return $http.get('http://localhost:3000/' + filterCodes).then(function(d) {
            d = d.data;
            var createWines = function() {
              for(var i = 0; i < 3; i++) {
                var wine = new Wine(
                  typeof d[i][0].Name === 'string' ? d[i][0].Name : 'no name',
                  typeof d[i][0].Varietal.Name === 'string' ? d[i][0].Varietal.Name : 'no grape',
                  typeof d[i][0].Vineyard.Name === 'string' ? d[i][0].Vineyard.Name : 'no vineyard',
                  typeof d[i][0].Vintage === 'string' ? d[i][0].Vintage : 'no vintage',
                  typeof d[i][0].Appellation.Name === 'string' ? d[i][0].Appellation.Name : 'no region',
                  typeof d[i][0].PriceRetail === 'number' ? d[i][0].PriceRetail : 'no price',
                  typeof d[i][0].Labels[0].Url === 'string' ? d[i][0].Labels[0].Url : 'no label',
                  typeof d[i][0].Url === 'string' ? d[i][0].Url : 'no url'
                )
                wines.push(wine);
              }
              return wines;
            }
          return createWines();
        })
      })
    },
      wineResults: function(){
        return wines;
      }
    }
  }
})();

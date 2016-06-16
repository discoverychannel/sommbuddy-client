(function () {
  'use strict'

  angular
    .module('sommbuddy')
    .factory('Selections', Selections);

  function Selections($http) {

    var userSelection = 0;
    var wines = [];

    return {
      addVal: function(val) {
         userSelection += val;
         console.log(userSelection);
         return userSelection;
      },
      getWines: function(price) {
        var code;
        $http.get('./js/filters.json').then(function(data){
          var filterObjs = JSON.parse(JSON.stringify(data)).data;
          filterObjs.forEach(function(filterObj){
            if(filterObj.val == userSelection){
              code = filterObj.filterCodes.join('+');
            }
          })
          return price + code;
        })
        .then(function(filterCodes) {
          $http.get('http://localhost:3000/' + filterCodes).then(function(d) {
            d = d.data[0];
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

            var createWines = function(){
              d.forEach(function(wineObj)) {
                var wine = new Wine (
                  wineObj.Name,
                  wineObj.Varietal.Name,
                  wineObj.Vineyard.Name,
                  wineObj.Vintage,
                  wineObj.Appellation.Name + ', ' + wineObj.Appellation.Region.Name,
                  wineObj.PriceRetail,
                  wineObj.Labels[0].Url,
                  wineObj.Url
                );
                wines.push(wine);
              })
            };
            createWines();
          })
        })
      },
      wineResults: function(){

        return wines = [
          {
            name: 'Veuve Clicquot Brut Yellow Label',
            grape: 'Non-Vintage',
            vineyard: 'Veuve Clicquot',
            vintage: 'Non-Vintage',
            region: 'France - Other regions',
            price: 55.99,
            picture: 'http://cache.wine.com/labels/528m.jpg',
            storeUrl: 'http://www.wine.com/v6/Veuve-Clicquot-Brut-Yellow-Label/wine/528/Detail.aspx'
          },
          {
            name: 'Veuve Clicquot Brut Yellow Label',
            grape: 'Non-Vintage',
            vineyard: 'Veuve Clicquot',
            vintage: 'Non-Vintage',
            region: 'France - Other regions',
            price: 55.99,
            picture: 'http://cache.wine.com/labels/528m.jpg',
            storeUrl: 'http://www.wine.com/v6/Veuve-Clicquot-Brut-Yellow-Label/wine/528/Detail.aspx'
          },{
            name: 'Veuve Clicquot Brut Yellow Label',
            grape: 'Non-Vintage',
            vineyard: 'Veuve Clicquot',
            vintage: 'Non-Vintage',
            region: 'France - Other regions',
            price: 55.99,
            picture: 'http://cache.wine.com/labels/528m.jpg',
            storeUrl: 'http://www.wine.com/v6/Veuve-Clicquot-Brut-Yellow-Label/wine/528/Detail.aspx'
          }
        ];
      }
    }
  }
})();

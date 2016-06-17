(function () {
  'use strict'
  app.factory('Selections', Selections);
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
            console.log("Name = " + d[0].Name);
            console.log("Varietal = " + d[0].Varietal.Name);
            console.log("Vineyard =" + d[0].Vineyard.Name);
            console.log("Vintage = " + d[0].Vintage);
            console.log("Region = " + d[0].Appellation.Region.Name);
            console.log("Price = " + d[0].PriceRetail);
            console.log("Picture = " + d[0].Labels[0].Url);
            console.log("StoreUrl = " + d[0].Url);
            console.log(d[0]);
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

            var createWines = function(index){
              for (var i = 0; i < 3; i++) {
                var wine = new Wine (
                  d[i].Name,
                  d[i].Varietal.Name,
                  d[i].Vineyard.Name,
                  d[i].Vintage,
                  d[i].Appellation.Name + ', ' + d[i].Apellation.Region.Name,
                  d[i].PriceRetail,
                  d[i].Labels[0].Url,
                  d[i].Url
                );
                wines.push(wine);
                console.log(wine);
              }
            }
            createWines();
          })
        })
      },
      wineResults: function(){
        return wines;
      }
    }
  }
})();

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('sommbuddy', ['ionic', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'js/views/main.html',
      controller: 'MainController',
      controllerAs: 'Main'
    })
    .state('preference1000', {
      url: '/preference1000',
      templateUrl: 'js/views/preference1000.html',
      controller: 'MainController',
      controllerAs: 'Main'
    })
    .state('preference2000', {
      url: '/preference2000',
      templateUrl: 'js/views/preference2000.html',
      controller: 'MainController',
      controllerAs: 'Main'
    })
    .state('preference100', {
      url: '/preference100',
      templateUrl: 'js/views/preference100.html',
      controller: 'MainController',
      controllerAs: 'Main'
    })
    .state('preference200', {
      url: '/preference200',
      templateUrl: 'js/views/preference200.html',
      controller: 'MainController',
      controllerAs: 'Main'
    })
    .state('preference300', {
      url: '/preference300',
      templateUrl: 'js/views/preference300.html',
      controller: 'MainController',
      controllerAs: 'Main'
    })
    .state('preference400', {
      url: '/preference400',
      templateUrl: 'js/views/preference400.html',
      controller: 'MainController',
      controllerAs: 'Main'
    })
    .state('preference20', {
      url: '/preference20',
      templateUrl: 'js/views/preference20.html',
      controller: 'MainController',
      controllerAs: 'Main'
    })
    .state('preference30', {
      url: '/preference30',
      templateUrl: 'js/views/preference30.html',
      controller: 'MainController',
      controllerAs: 'Main'
    })
    .state('preference40', {
      url: '/preference40',
      templateUrl: 'js/views/preference40.html',
      controller: 'MainController',
      controllerAs: 'Main'
    })
    .state('foodtaste', {
      url: '/foodtaste',
      templateUrl: 'js/views/foodtaste.html',
      controller: 'MainController',
      controllerAs: 'Main'
    })
    .state('price', {
      url: '/price',
      templateUrl: 'js/views/price.html',
      controller: 'MainController',
      controllerAs: 'Main'
    })
    .state('result', {
      url: '/result',
      templateUrl: 'js/views/result.html',
      controller: 'ResultsController',
      controllerAs: 'Results'
    });
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

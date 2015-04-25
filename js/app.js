var apiKey = "INSERT HERE YOUR KEY";
var base_url = "http://api.brewerydb.com/v2/";

angular.module('openbeer', ['ionic','ngCordova','openbeer.controllers','openbeer.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('main', {
    url: '/main',
    templateUrl: 'templates/main.html',
    controller: 'MainController'
  })

  .state('beer', {
    url: '/beer/:id',
    templateUrl: 'templates/beer.html',
    controller: 'BeerController'
  });


  $urlRouterProvider.otherwise('/main');
});

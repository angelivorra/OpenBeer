angular.module('openbeer.controllers', ['ionic','openbeer.services'])


.controller('MainController', function($scope, $http, $ionicLoading, $state) {
  console.log('Main');
  $scope.dom = {};
  $scope.data = {};

  $scope.loadBeer = function(id) {
    $state.go('beer', { id : id });
  };

  $scope.doSearch = function() {
    console.log('doSearch('+$scope.dom.search+')');
    $ionicLoading.show();
    var p = { q : $scope.dom.search,
             key : apiKey,
             type : "beer"};
    $http.get(base_url+'search', {
      params : p
    }).success(function(data, status, headers, config) {
      //console.log('sucess');
      $scope.data = data;
      $ionicLoading.hide();
    }).
    error(function(data, status, headers, config) {
      console.log('error');
      $ionicLoading.hide();
    });
  };


  $scope.hasMoreData = function() {
    return $scope.data.currentPage < $scope.data.numberOfPages;
  };

  $scope.loadMore = function() {
    console.log('doSearch('+$scope.dom.search+')');
    var p = { q : $scope.dom.search,
             key : apiKey,
             type : "beer",
             p : $scope.data.currentPage + 1 };
    $http.get(base_url+'search', {
      params : p
    }).success(function(data, status, headers, config) {
      //console.log('sucess');
      $scope.data.currentPage = data.currentPage;
      for (var i = 0; i < data.data.length; i++) {
            $scope.data.data.push(data.data[i]);
      }
      $scope.$broadcast('scroll.infiniteScrollComplete');
    }).
    error(function(data, status, headers, config) {
      console.log('error');
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };


})


.controller('BeerController', function($scope, $http, $stateParams) {
  console.log('Beer '+$stateParams.id);

  $scope.data = {};

  var p = { key : apiKey };

  $http.get(base_url+'beer/'+$stateParams.id, {
    params : p
  }).success(function(data, status, headers, config) {
    console.log('sucess');
    $scope.data = data;
  }).
  error(function(data, status, headers, config) {
    console.log('error');
  });


})

;

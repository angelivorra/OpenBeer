angular.module('openbeer.services', ['ionic'])

.service('RequestService', function($q, $ionicLoading, $http) {

  this.testLogin = function() {
    /*
    var deferred = $q.defer();
    var promise = deferred.promise;

    $ionicLoading.show({
      template: 'Comprobando credenciales...'
    });

    $http({
      method: 'GET',
      url: entorno.getItem('q10url') + 'test'
    }).success(function(data, status, headers, config) {
      $ionicLoading.hide();
      deferred.resolve(data);

    }).error(function(data, status, headers, config, statusText) {
      $ionicLoading.hide();
      deferred.reject(data);

    });

    promise.success = function(fn) {
      promise.then(fn);
      return promise;
    }

    promise.error = function(fn) {
      promise.then(null, fn);
      return promise;
    }
    return promise;
    */
  }

})

;
define([], function()
{
    var services = angular.module('app.Services', []);

    services.factory('testeService', ['$q', '$http', function($q, $http) {
      this.dataDefer = $q.defer();
      this.rotasLoaded = null;

      this.loadRotas = function(){
        var def = this.dataDefer;

        //Exit without making any ajax call
        if(this.rotasLoaded != null){ return def.promise; }

        $http.get('data/rotas.json').
        success(function(data, status, headers, config) {
          //resolving promisse
            def.resolve(data);
        }).error(function() {
          def.reject("Error loading");
        });;//end http

        return def.promise;
      }

      return this;

    }]);

    return services;
});
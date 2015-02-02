var wl = startTests;
startTests = function(){};

/*
 * Here we load all files in amd that our app may need
 */
  setTimeout(function(){

    require(['js/src/lib/angular-mocks.js'], function(){

      describe('Testing Compadres Auth', function() {
        var testEngine, testModule;
        var $httpBackend, $rootScope, createController, requestHandler, $injector;

        beforeEach(function(){
          testEngine = {};
          testModule = angular.module('test', ['app', 'ngMockE2E']);
          $injector =  angular.injector(['ng', 'test']);

          $httpBackend = $injector.get('$httpBackend');
          $httpBackend.whenGET(/views/).respond('sdfsdfsdf');

           // Get hold of a scope (i.e. the root scope)
           $rootScope = $injector.get('$rootScope');
           // The $controller service is used to create instances of controllers
           var $controller = $injector.get('$controller');

           createController = function(controllerName) {
             return $controller(controllerName, {'$scope' : $rootScope });
           };
        });   


        it('should fail to read data', function() {
          var srv = $injector.get('testeService');
          expect(srv.rotasLoaded).toEqual('Error loading');
        });
      });//end describe

      wl();
    });//end require

  }, 2000);
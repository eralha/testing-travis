var wl = startTests;
startTests = function(){};

/*
 * Here we load all files in amd that our app may need
 */
  setTimeout(function(){

    require(['js/src/lib/angular-mocks.js'], function(){

      describe('Testing angular dependencing injection', function() {
        var testEngine, testModule;
        var $httpBackend, $rootScope, createController, requestHandler;

        beforeEach(function(){
          testEngine = {};
          testModule = angular.module('test', ['app', 'ngMockE2E']);
          module('test');
        });   

        beforeEach(inject(function($injector){
          $httpBackend = $injector.get('$httpBackend');
          $httpBackend.whenGET(/views/).respond('sdfsdfsdf');

           // Get hold of a scope (i.e. the root scope)
           $rootScope = $injector.get('$rootScope');
           // The $controller service is used to create instances of controllers
           var $controller = $injector.get('$controller');

           createController = function(controllerName) {
             return $controller(controllerName, {'$scope' : $rootScope });
           };
        }));   


        it('should fail to read data', inject(function(testeService) {
          var srv = testeService;
          expect(srv.rotasLoaded).toEqual(null);
        }));
      });//end describe

      wl();
    });//end require

  }, 2000);
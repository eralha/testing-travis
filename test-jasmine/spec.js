
describe('Testing Compadres Auth', function() {
  var testEngine, testModule;
  var $httpBackend, $rootScope, createController, requestHandler, $injector;

  beforeEach(function(){
    testEngine = {};
    testModule = angular.module('test', ['app', 'ngMockE2E']);

    $injector = angular.injector(['ng', 'test']);

    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.whenGET(/views/).respond('');

    // Get hold of a scope (i.e. the root scope)
    $rootScope = $injector.get('$rootScope');
    // The $controller service is used to create instances of controllers
    var $controller = $injector.get('$controller');

    createController = function(controllerName) {
      return $controller(controllerName, {'$scope' : $rootScope });
    };

  });   

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });


  it('Testing rootScoope should be available', function() {

    var ctrl = createController('myCtrl');

    expect($rootScope.helloWorld()).toEqual('Hello');
    expect(ctrl.hello()).toEqual('Hello');

  });

  it('Testing rootscoot availability should be undefined', function() {

    expect($rootScope.helloWorld).toEqual(undefined);

  });

  it('Testing amd controller, should have access to controller', function() {

    var ctrl = createController('HomeViewController');
    expect($rootScope.getPageHeading()).toEqual("Welcome");

  });

});
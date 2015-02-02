var appCFO_baseUrl = "src";
require.config({
    baseUrl: 'js/'+appCFO_baseUrl+'/',
    paths: {
        'angular' : 'lib/angular.min',
        'angular-route' : 'lib/angular.route.min',
        'angular-animate' : 'lib/angular.animate.min',
        'app' : 'ng/app',
        'controllers' : 'ng/controllers',
        'directives' : 'ng/directives',
        'services' : 'ng/services',
        'jquery' : '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min',
        'plugins' : 'lib/plugins',
        'enquire' : 'lib/enquire',
        'picturefill' : 'lib/picturefill'
    },
    shim: {
        'angular-animate': {
            deps: ['angular']
        },
        'app': {
            deps: ['angular', 'angular-route', 'angular-animate', 'plugins']
        },
        'angular-route': {
            deps: ['angular']
        }
    }
});
require(['app'], function(app){

	function onDeviceReady() {
		//At this stage we have device access
	}
	document.addEventListener("deviceready", onDeviceReady, false);
	
	try{
		angular.bootstrap(document, ['app']);
	}catch(e){
		alert(e);
	}

});

window.handleOpenURL = function(url) {
  setTimeout(function() {
    alert("received url: " + url);
  }, 0);
}

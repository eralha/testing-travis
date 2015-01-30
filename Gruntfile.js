module.exports = function(grunt) {
 
  grunt.initConfig({

    jshint: {
      allFiles: ['Gruntfile.js', 'hello.js'],
      jshintrc: 'rules.jshintrc'
    },
    connect: {
	    server: {
	      options: {
	        port: 8000,
	        base: '.'
	      }
	    }
	  },//end connect
	qunit: {
	    all: ['test/**/*.html']
	  },//end qunit
	copy: {
	  main: {
	    src: 'js/**',
	    dest: 'test/',
	  },
	},//end copy
	jasmine: {
	    taskName: {
	      src: [
	      	'test-jasmine/js/src/lib/angular.min.js',
	      	'test-jasmine/js/src/lib/angular.route.min.js',
	      	'test-jasmine/js/src/lib/angular.animate.min.js',
	      	'test-jasmine/js/src/lib/angular-mocks.js',
	      	'test-jasmine/js/src/ng/controllers/*.js',
	      	'test-jasmine/js/src/ng/app.js',
	      	],
	      options: {
	        specs: 'test-jasmine/*Spec.js',
	        host: 'http://127.0.0.1:8000/',
	        template: require('grunt-template-jasmine-requirejs'),
	        templateOptions: {
	          requireConfigFile: 'test-jasmine/js/main.js',
	          requireConfig: {
	            baseUrl: 'test-jasmine/js/src/'
	          }
	        }
	      }
	    }
	  }
  });
 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['copy', 'connect', 'jshint', 'qunit']);
 
};
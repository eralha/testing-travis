module.exports = function(grunt) {
 
  grunt.initConfig({

    jshint: {
	    options: {
	      curly: true,
	      eqeqeq: true,
	      eqnull: true,
	      browser: true,
	      globals: {
	        jQuery: true
	      },
	    },
      //allFiles: ['js/src/ng/**/*.js']
      allFiles: ['hello.js']
    },
	qunit: {
	    all: ['test/**/*.html']
	  },//end qunit
	copy: {
	  main: {
	    src: 'js/**',
	    dest: 'test/',
	  },
	},//end copy
	concat: {
	    options: {
	      separator: '\n',
	    },
	    dist: {
	      src: [
	      	'js/src/lib/angular.min.js',
	      	'js/src/lib/angular.animate.min.js',
	      	'js/src/lib/angular.route.min.js',
	      	'js/src/lib/angular.mocks.js',
//	      	'js/src/lib/require.js',
	      	'js/src/ng/**/*.js'
	      	],
	      dest: 'test/angularCode.js',
	    },
	  },

	  connect: {
	    test : {
	      port : 8000
	    }
	  },
	  jasmine: {
	    taskName: {
	      src: [
	      ],//This files are being loaded by our main.js declared in vendors
	      options: {
	      	keepRunner: true,
	        specs: 'test-jasmine/spec.js',
	        host: 'http://127.0.0.1:8000/',
	        vendor: [
	          "http://maps.googleapis.com/maps/api/js?sensor=false&language=pt",
	          "js/main.js"
	        ],
	        template: require('grunt-template-jasmine-requirejs'),
	        templateOptions: {
	          
	          requireConfig: {
	          	baseUrl: "js/src/",
	          	"paths": {
				    "app": "ng/app",
				  },
	          },
	        }
	      }
	    },
	  }

  });
 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.loadNpmTasks('grunt-contrib-jasmine');


  grunt.registerTask('default', ['jshint', 'connect', 'jasmine']);
 
};
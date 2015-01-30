module.exports = function(grunt) {
 
  grunt.initConfig({

    jshint: {
      allFiles: ['Gruntfile.js', 'hello.js'],
      jshintrc: 'rules.jshintrc'
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
  });
 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy', 'jshint', 'qunit']);
 
};
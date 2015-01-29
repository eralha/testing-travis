module.exports = function(grunt) {
 
  grunt.initConfig({

  	cwd: 'js',
    dest: 'test/js/',
    src: ['**'],

    jshint: {
      allFiles: ['Gruntfile.js', 'hello.js']
    },
    connect: {
	    server: {
	      options: {
	        port: 8000,
	        base: '.'
	      }
	    }
	  },
	qunit: {
	    all: ['test/**/*.html']
	  },
	copy: {
	  main: {
	    src: 'js/*',
	    dest: 'test/',
	  },
	}
  });
 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy', 'connect', 'jshint', 'qunit']);
 
};
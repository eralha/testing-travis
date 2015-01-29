module.exports = function(grunt) {
 
  grunt.initConfig({
    jshint: {
      allFiles: ['Gruntfile.js', 'hello.js']
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', 'jshint');
 
};
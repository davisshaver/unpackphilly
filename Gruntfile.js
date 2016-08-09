module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      target: {
        files: {
          './css/styles-min.css': ['./css/normalize.css', './css/styles.css' ]
        }
      }
    },
    watch: {
      css: {
        files: ['./css/styles.css'],
        tasks: ['cssmin']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['cssmin']);

};
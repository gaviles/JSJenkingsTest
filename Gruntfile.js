module.exports = function(grunt) {
  grunt.initConfig({
    jasmine : {
      src : 'src/*.js',
	  options : {
        specs : 'tests/*.js',
		template : require('grunt-template-jasmine-istanbul'),
        templateOptions: {
          coverage: 'reports/coverage.json',
          report: 'reports/coverage'
        }
      }
    }
  });
  // Register tasks. 
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  // Default task.
  grunt.registerTask('default', ['jasmine']);
};
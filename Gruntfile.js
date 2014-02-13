fs = require('fs');

module.exports = function(grunt) {

	var c = {};
	c.jshint = {
		all: ['Gruntfile.js', 'src/*.js']
	};
	c.uglify = {
		all: {
			files: {
				'oink.min.js': ['src/oink.js']
			}
		}
	};
	c.jasmine = {
		all: {
			src: ['src/oink.js'],
			options: {
				specs: 'src/*Spec.js'
			}
		}
	};
	grunt.initConfig(c);

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	
	grunt.registerTask('default', ['jshint', 'uglify', 'jasmine']);
};
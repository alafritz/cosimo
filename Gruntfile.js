'use strict';


module.exports = function (grunt) {
    require('time-grunt')(grunt);

    // Load the project's grunt tasks from a directory
    require('grunt-config-dir')(grunt, {
        configDir: require('path').resolve('tasks')
    });

    // App tasks
    grunt.registerTask('default', ['less']);

};

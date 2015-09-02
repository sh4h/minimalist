module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        uglify: {

            build: {
                src: ['js/jq.js', 'js/jquery.opacityrollover.js', 'jquery.galleriffic.js' ],
                dest: 'build/js/cB_02.min.js'
            }
        },

        less: {
            development: {

                files: {
                    "css/styles.css": "css/style.less"
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
// Load the plugin that provides the "less" task.
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'less']);

};
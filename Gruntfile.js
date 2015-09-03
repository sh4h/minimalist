module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        uglify: {

            build: {
                src: ['js/jq.js', 'js/jquery.opacityrollover.js', 'js/jquery-ui.min.js', 'js/jquery.galleriffic.js', 'js/gallery.js', 'js/cb.js' ],
                dest: 'build/js/cB_02.min.js'
            }
        },

        less: {
            development: {

                files: {
                    "css/styles.css": "css/style.less"
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'build/css/cb_min.css': ['css/basic.css', 'css/font-icon.css', 'css/galleriffic-5.css', 'css/jquery-ui.min.css', 'css/styles.css']
                }
            }
        },
		copy: {
		  main: {
			files: [
			  // includes files within path
			  {expand: true, src: ['images/**'], dest: 'build/'},
			  {expand: true, src: ['css/iconFonts/*'], dest: 'build/', filter: 'isFile'},
			  {expand: true, src: ['index.html'], dest: 'build/'}
			]
		  }
		}

		
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
// Load the plugin that provides the "less" task.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'less', 'copy', 'cssmin']);

};
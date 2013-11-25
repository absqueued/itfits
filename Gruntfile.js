module.exports = function(grunt){
	"use strict";
	
	require("matchdep").filter("grunt-*").forEach(grunt.loadNpmTasks);
	
    grunt.initConfig({
        pkg: grunt.file.readJSON('PACKAGE.json'),
		
		htmlhint: {
			build: {
				options: {
					'tag-pair': true,
					'tagname-lowercase': true,
					'attr-lowercase': true,
					'attr-value-double-quotes': true,
					'doctype-first': true,
					'spec-char-escape': true,
					'id-unique': true,
					'style-disabled': true
				},
				src: ['index.html', 'page.html', 'portfolio.html', 'blog.html', 'contact.html']
			}
		},
		
		uglify: {
			build: {
				files: {
					"assets/js/script.min.js": ["assets/js/script.js"]
				}
			}
		},
		
		less: {
			development: {
				option: {
					paths: ["assets/css"]
				},
				files: {
					"assets/css/styles.css": "assets/css/styles.less"
				}
			}
		},
		
		cssmin: {
			add_banner: {
				 options: {
				  banner: '/* It-Fits minified css file */'
				},
				files: {
					"assets/css/styles.min.css": ["assets/css/normalize.css", "assets/css/styles.css"]
				}
			}
	    },
		
		
		watch: {
			html: {
				files: ['index.html', 'page.html', 'portfolio.html', 'blog.html', 'contact.html'],
				tasks: ['htmlhint']
			},
			js: {
				files: ['assets/js/script.js'],
				tasks: ['uglify']
			},
			less: {
				files: ['assets/css/styles.less'],
				tasks: ['less']
			},
			css: {
				files: ['assets/css/styles.css'],
				tasks: ['cssmin']
			}
			
		}
    });

    grunt.registerTask('default', []);

};
module.exports = function (grunt) {
    "use strict";

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

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
                options: {
                    paths: ["assets/css"],
                    sourceMap: true,
                    sourceMapFilename: "assets/css/styles.css.map",
                    sourceMapURL: "assets/css/styles.css.map"
                },
                files: {
                    "assets/css/styles.css": "assets/css/styles.less"
                }
            }
        },

        cssmin: {
            add_banner: {
                options: {
                    banner: '/* It-Fits Styles, Version 2.0.0  */',
                    processImport: false
                },
                files: {
                    "assets/css/styles.min.css": ["assets/css/styles.css"]
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
                files: ['assets/css/*.less'],
                tasks: ['less', "cssmin"]
            }
        }
    });

    grunt.registerTask('default', ["watch:less"]);

};
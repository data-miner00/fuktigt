/**
 * The task for minifying CSS.
 * Refer to https://github.com/gruntjs/grunt-contrib-cssmin
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-cssmin");

  var config = {
    options: {
      mergeIntoShorthands: false,
      roundingPrecision: -1,
    },
    target: {
      files: {
        "dist/styles.min.css": [
          "dist/less.css",
          "dist/sass.css",
          "dist/styles.css",
        ],
      },
    },
  };

  grunt.config("cssmin", config);
};

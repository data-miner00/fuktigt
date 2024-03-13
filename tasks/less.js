/**
 * The task for transpiling LESS to CSS.
 * Refer to https://github.com/gruntjs/grunt-contrib-less
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  "use strict";
  grunt.loadNpmTasks("grunt-contrib-less");

  var config = {
    dev: {
      options: {
        paths: ["src/styles/less"],
      },
      files: {
        "dist/less.css": "src/styles/less/main.less",
      },
    },
  };

  grunt.config("less", config);
};

/**
 * The task for JsHint.
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  "use strict";

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

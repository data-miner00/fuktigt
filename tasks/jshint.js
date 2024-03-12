/**
 * The task for JsHint.
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  "use strict";

  var config = {
    files: {
      src: ["src/*.js"],
    },
  };

  grunt.config("jshint", config);
};

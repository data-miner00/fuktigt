/**
 * The task for JsHint.
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  var config = {
    js: {
      files: ["src/*.js"],
      tasks: ["concat-js-only"],
    },
    css: {
      files: ["src/styles/*.css"],
      tasks: ["concat-css-only"],
    },
  };

  grunt.config("watch", config);
};

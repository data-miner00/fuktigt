/**
 * The task for concatenating files.
 * Refer to https://github.com/gruntjs/grunt-contrib-concat
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-concat");

  var config = {
    js: {
      options: {
        banner: "(function(){'use strict';\n",
        footer: "\n})();",
      },
      src: ["src/*.js"],
      dest: "dist/app.js",
    },
    css: {
      src: ["src/styles/*.css"],
      dest: "dist/styles.css",
    },
  };

  grunt.config("concat", config);
};

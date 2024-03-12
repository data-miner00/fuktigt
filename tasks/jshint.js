var fs = require("node:fs");

var commentRegex = /\/\/.*?$/gm;
var jshintFile = fs.readFileSync(".jshintrc", "utf-8");
var sanitizedJson = jshintFile.replace(commentRegex, "");
var jshintOptions = JSON.parse(sanitizedJson);

/**
 * The task for JsHint.
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  "use strict";

  var config = {
    files: {
      src: ["dist/app.js"],
    },
    options: jshintOptions,
  };

  grunt.config("jshint", config);
};

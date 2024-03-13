/**
 * The entry for Grunt task runner.
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  // Register tasks
  grunt.loadTasks("tasks");

  grunt.registerTask("run", function () {
    console.log("Running from grunt");
  });

  grunt.registerTask("run2", function () {
    console.log("Running from grunt 2");
  });

  grunt.registerTask("test-env", ["run", "run2"]);

  // Run standalone concat tasks
  grunt.registerTask("concat-js-only", ["concat:js"]);
  grunt.registerTask("concat-css-only", ["concat:css"]);

  grunt.registerTask("default", [
    "clean",
    "concat",
    "jshint",
    "sass",
    "less",
    "cssmin",
    "uglify",
  ]);
};

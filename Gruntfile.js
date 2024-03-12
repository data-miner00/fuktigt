/**
 * The entry for Grunt task runner.
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  // Configuration
  grunt.initConfig({
    concat: {
      js: {
        src: ["src/*.js"],
        dest: "dist/app.js",
      },
      css: {
        src: ["src/styles/*.css"],
        dest: "dist/styles.css",
      },
    },
  });

  // Load plugins
  grunt.loadNpmTasks("grunt-contrib-concat");

  // Register tasks
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
};

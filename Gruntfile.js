var sass = require("node-sass");

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

    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
      },
      build: {
        files: [
          {
            src: "src/styles/sass/main.sass",
            dest: "dist/sass.css",
          },
        ],
      },
    },

    uglify: {
      build: {
        files: [
          {
            src: "dist/app.js",
            dest: "dist/app.min.js",
          },
        ],
      },
    },
  });

  // Load plugins
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-sass");

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

  grunt.registerTask("default", ["concat", "jshint", "sass", "uglify"]);
};

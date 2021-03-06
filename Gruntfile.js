module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    copy: {
      src: {
        files: [
          { expand: true, cwd: "src", src: "**", dest: "dist/" }
        ]
      },
      libs: {
        files: [
            { expand: true, cwd: "node_modules/reveal.js/css/", src: "**", dest: "dist/libs/css/" },
            { expand: true, cwd: "node_modules/reveal.js/js/", src: "**", dest: "dist/libs/js/" },
            { expand: true, cwd: "node_modules/reveal.js/plugin/", src: "**", dest: "dist/libs/plugin/" },
            { expand: true, cwd: "node_modules/reveal.js/lib/", src: "**", dest: "dist/libs/lib/" }
        ]
      }
    },
    watch: {
      html: {
        files: ["**"],
        tasks: ['copy:src']
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask("default", ["copy"]);
  grunt.registerTask("watch--",["watch"]);
};

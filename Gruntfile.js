module.exports = function (grunt){
  grunt.initConfig({
      concat: {
          release: {
              src: ['src/flapjax.js','src/module.js', 'src/script.js'],
              dest: 'main.js'
          }
      },
      watch: {
          files: ['<%= concat.release.src %>'],
          tasks: ['default']
      }
  })

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['concat','watch']);
}
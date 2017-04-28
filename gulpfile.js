'use strict';

/**
 * Dependancies
 */

var plugins       = require('gulp-load-plugins')({ lazy: true });
var gulp          = require('gulp');
var terminus      = require('terminus');

require('gulp-task-list')(gulp);

var paths = {
    lint: [
      './lib/**/*.js', 
      './bin/*', 
      'gulpfile.js'
    ]
};


gulp.task('lint', function() {
  return gulp.src(paths.lint)
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'));
});

/**
 * JSCS Files
 */

gulp.task('jscs', function () {
  return gulp.src(paths.lint)               // Read .js files
    .pipe(plugins.jscs())                         // jscs .js files
    .on('error', function (e) {
      plugins.util.log(e.message);
      plugins.jscs().end();
    })
    .pipe(terminus.devnull({ objectMode: true }));
});




gulp.task('default', ['lint', 'jscs']);

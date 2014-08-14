/**
 * Module dependencies
 */

var source = require('vinyl-source-stream');
var livereload = require('gulp-livereload');
var spawn = require('child_process').spawn;
var browserify = require('browserify');
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var myth = require('gulp-myth');
var gulp = require('gulp');
var path = require('path');

/**
 * Exports
 */

module.exports = gulp;

/**
 * Compile CSS
 *
 * Includes css files in the following order
 * /base/reset.css > /base/vars.css > /base/*.css > all other css files.
 */

gulp.task('styles', function() {
  gulp
    .src([
      'client/modules/index/reset.css',
      'client/modules/index/vars.css',
      'client/modules/**/*.css'
    ])
    .pipe(concat('build.css'))
    .pipe(myth())
    .pipe(gulp.dest(path.join(__dirname, '/build/')));
});

/**
 * Compile JS
 */

gulp.task('modules', function() {
  browserify(path.join(__dirname, '/client/modules/index/index.js'))
    .transform('brfs')
    .bundle()
    .pipe(source('build.js'))
    .pipe(gulp.dest(path.join(__dirname, '/build/')));
});

/**
 * Copy assets
 */

gulp.task('assets', function() {
  gulp
    .src(['client/modules/**/*.jpg', 'client/modules/**/*.png'])
    .pipe(gulp.dest(path.join(__dirname, '/build/images')));
});

/**
 * Lint files
 */

gulp.task('lint', function() {
  gulp
    .src(['client/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});

/**
 * Watch for file changes
 */

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(['client/**/*.js', 'client/**/**/*.js'], ['lint', 'modules']);
  gulp.watch('client/modules/**/*.css', ['styles']);
  gulp.watch(['client/modules/**/*.jpg', 'client/modules/**/*.png'], ['assets']);
  gulp.watch(['/build/**']).on('change', livereload.changed);
});

/**
 * Default
 */

gulp.task('default', [
  'styles',
  'modules',
  'assets',
  'lint',
  'watch'
]);

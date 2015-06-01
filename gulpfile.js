/*jshint node: true*/
var gulp = require('gulp');
var watch = require('gulp-watch');
var coveralls = require('gulp-coveralls');

var source = './blocks/**/*';
var manifest = './manifest.json';
var components = './node_modules/js-md5/build/*';
var notTests = '!./**/*.test.js';
var destination = './dist';

var gulpSources = [manifest, source, components, notTests];

gulp.task('watch-copy', function() {
  return gulp.src(gulpSources, {base: './'})
    .pipe(watch(gulpSources, {verbose: true}))
    .pipe(gulp.dest(destination));
});

gulp.task('copy', function() {
  gulp
    .src(gulpSources, {base: './'})
    .pipe(gulp.dest(destination));
});

gulp.task('coveralls', function () {
  gulp.src('./coverage/**/lcov.info')
    .pipe(coveralls());
});

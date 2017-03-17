const gulp = require('gulp');
const git = require('gulp-git');
const argv = require('yargs').argv;

// Task
gulp.task('addAll', function() {

// Pull Files
  return gulp.src('./gulpfile.js')
    .pipe(git.add());

});

// Task
gulp.task('commit', function() {

// Commit
return gulp.src('./gulpfile.js')
  .pipe(git.commit('auto Commit message...loading'));

});

// Task
gulp.task('everything', ['addAll', 'commit']);


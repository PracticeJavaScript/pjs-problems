const gulp = require('gulp');
const babel = require('gulp-babel');

const src = './problems/*.js';
const dist = './problems'

// re-format template strings, spacing, and save in place
gulp.task('es5', () => {
  gulp.src(src)
    .pipe(babel())
    .pipe(gulp.dest(dist));
});

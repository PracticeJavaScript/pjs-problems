// deps
const gulp = require('gulp');
const babel = require('gulp-babel');

// config
const src = './problems/**/*.js';
const dest = './es5/problems'

gulp.task('es5', () => {
  return gulp.src(src)
    .pipe(babel())
    .pipe(gulp.dest(dest));
})

gulp.task('watch', ['es5'], () => {
  gulp.watch(src, ['es5'])
    .on('change', e => {
      console.log(`File ${e.path} was ${e.type}, running ES5 task...`)
    })
});

gulp.task('default', ['es5']);

const gulp = require('gulp');
const ts = require('gulp-typescript');
const spawn = require('child_process').spawn;

var del = require('del');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('clean', function(cb) {
  del(['dist'], cb);
});

gulp.task('scripts', () => {
  const tsResult = tsProject.src()
    .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('./dist'));
});

gulp.task('copy-json', () => {
  return gulp.src('./src/**/*.json')
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy-yaml', () => {
  return gulp.src('./src/**/*.yaml')
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', ['scripts', 'copy-json', 'copy-yaml'], () => {
  gulp.watch('src/**/*.ts', ['scripts']);
  gulp.watch('src/**/*.json', ['copy-json']);
  gulp.watch('src/**/*.yaml', ['copy-yaml']);
});

gulp.task('default', ['clean', 'watch']);
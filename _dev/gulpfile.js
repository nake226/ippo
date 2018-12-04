// include the required packages.
var gulp = require('gulp');
var stylus = require('gulp-stylus');
// path
var paths = {
  stylus: ['./_styl/*.styl', '!./_styl/_*.styl']
}
 
// stylusをcssにする
gulp.task('stylus', function () {
  return gulp.src(paths.stylus)
    .pipe(stylus())
    .pipe(gulp.dest('../css/'));
});
// 監視する
gulp.task('watch', function () {
  gulp.watch('./_styl/*.styl', ['stylus']);
});
// デフォルトタスク
gulp.task('default', ['watch']);
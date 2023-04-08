const gulp = require('gulp');
const gulpMinifyCss = require('gulp-minify-css');
const gulpHtmlmin = require('gulp-htmlmin');

gulp.task('minify-css', async () => {
  gulp.src('./src/styles/*.css')
    .pipe(gulpMinifyCss({
      compatibility: 'ie8',
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('minify-html', async () => {
  gulp.src('src/templates/*.html')
    .pipe(gulpHtmlmin({
      collapseWhitespace: true,
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', async () => {
  gulp.watch('./src/styles/*.css', gulp.series('minify-css'));
  gulp.watch('./src/templates/*.html', gulp.series('minify-html'));
});

var gulp = require('gulp');

var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('sass', function() {
  return sass('styles/main.scss')
    .pipe(gulp.dest('styles'))
    .pipe(reload({ stream:true }));
});

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  });

  gulp.watch('scss/*.scss', ['sass']);
});

var gulp =      require('gulp'),
    harp =      require('harp'),
    concat =    require('gulp-concat'),
    cleanCss =  require('gulp-clean-css'),
    uglify =    require('gulp-uglify'),
    rev =       require('gulp-rev')

var paths = {
  styles: {
    src: 'build/css/*.css',
    dest: 'dist/'
  },
  scripts: {
    src: 'build/js/*.js',
    dest: 'dist/'
  }
}

/**
 * Build site with Harp compile
 */
gulp.task('build', function() {
  return gulp.src('public/')
    .pipe(shell([
      'harp compile public/ build/'
    ]))
});



/**
 * Optimize js for production
 */
gulp.task('js', function() {
  return gulp.src(['build/js/jquery*.js', 'build/js/landing.js', 'build/js/grid.js', 'build/cards.js'])
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
});

/**
 * Optimize css for production
 */
gulp.task('css', function() {
  return gulp.src(['build/css/main.css', 'build/css/slideshow.css', 'build/css/contact.css'])
    .pipe(concat('app.css'))
    .pipe(cleanCss())
    .pipe(gulp.dest('dist'))
});

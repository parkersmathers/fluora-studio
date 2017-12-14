var gulp = require('gulp');
var harp = require('harp')
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var deploy = require('gulp-gh-pages');
var shell = require('gulp-shell');
var imagemin = require('gulp-imagemin');
var jpegRecompress = require('imagemin-jpeg-recompress')


/**
 * Serve the Harp Site
 */
gulp.task('serve', function() {
  harp.server('public/', {
    port: 9000
  }, function() {
    browserSync({
      proxy: "localhost:9000",
      open: false,
      /* Hide the notification. It gets annoying */
      notify: {
        styles: ['opacity: 0', 'position: absolute']
      }
    });
    /**
     * Watch for sass changes, tell BrowserSync to refresh main.css
     */
    gulp.watch("public/**/*.css", function() {
      reload("main.css", {
        stream: true
      });
    });
    /**
     * Watch for all other changes, reload the whole page
     */
    gulp.watch(["public/**/*.ejs", "public/**/*.json", "public/**/*.md"], function() {
      reload();
    });
  })
});

/**
 * Optimize images
 */

gulp.task('images', function() {
  gulp.src('images/*.jpg')
    .pipe(imagemin([
      jpegRecompress({
        loops: 2,
        min: 50,
        max: 85,
        progressive: true
      })
    ], {
      verbose: true
    }))
    .pipe(gulp.dest('public/images/'))
})

/**
 * Serve the site in production
 */

gulp.task('production', function() {
  return gulp.src('')
    .pipe(shell([
      'NODE_ENV=production sudo harp server --port 80'
    ]))
});

/**
 * Build the Harp Site
 */
gulp.task('build', function() {
  return gulp.src('public/')
    .pipe(shell([
      'harp compile public/ dist/'
    ]))
});

/**
 * Push build to gh-pages
 */
gulp.task('deploy', ['build'], function() {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});

/**
 * Default task, running `gulp` will fire up the Harp site,
 * launch BrowserSync & watch files.
 */
gulp.task('default', ['serve']);

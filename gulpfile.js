var gulp = require('gulp');
var harp = require('harp')
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var deploy = require('gulp-gh-pages');
var shell = require('gulp-shell');
var imagemin = require('gulp-imagemin');
var jpegRecompress = require('imagemin-jpeg-recompress')
var concat = require('gulp-concat')
var cleanCss = require('gulp-clean-css')
var uglify = require('gulp-uglify')
var rev = require('gulp-rev')

/**
* Optimize build assets
*/

// js & css
gulp.task('js', function () {
	return gulp.src(['public/js/jquery*.js', 'public/js/landing.js', 'public/js/grid*.js', 'public/cards.js'])
		.pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(rev())
		.pipe(gulp.dest('dist/js'))
    .pipe(rev.manifest('dist/rev-manifest.json', {
      merge: true
    }))
    .pipe(gulp.dest(''))
});

gulp.task('css', function () {
	return gulp.src(['public/css/main.css', 'public/css/slideshow.css', 'public/css/contact.css'])
		.pipe(concat('stylesheet.css'))
    .pipe(cleanCss())
    .pipe(rev())
		.pipe(gulp.dest('dist/css'))
    .pipe(rev.manifest('dist/rev-manifest.json', {
      merge: true
    }))
    .pipe(gulp.dest(''))
});

// images
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
  return gulp.src("dist/**/*")
    .pipe(deploy())
});

/**
 * Default task, running `gulp` will fire up the Harp site,
 * launch BrowserSync & watch files.
 */
gulp.task('default', ['serve']);
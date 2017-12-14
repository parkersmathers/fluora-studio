var gulp = require('gulp'),
    harp = require('harp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    deploy = require('gulp-gh-pages'),
    shell = require('gulp-shell'),
    imagemin = require('gulp-imagemin'),
    jpegRecompress = require('imagemin-jpeg-recompress'),
    concat = require('gulp-concat'),
    cleanCss = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    rev = require('gulp-rev'),
    del = require('del'),
    changed = require('gulp-changed')

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
      /* Hide the notification */
      notify: {
        styles: ['opacity: 0', 'position: absolute']
      }
    })
    /**
     * tell BrowserSync to refresh main.css
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
 * BUILD tasks
 */

gulp.task('clean', function() {
  return del.sync('dist');
});

/**
 * Optimize assets
 */
gulp.task('js', function() {
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

gulp.task('css', function() {
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

gulp.task('images', function() {
  var imgSrc = 'images/*.+(png|jpg|gif|)',
      imgDest = 'public/images'

  return gulp.src(imgSrc)
    .pipe(changed(imgDest))
    .pipe(imagemin([
      jpegRecompress({
        loops: 2,
        min: 50,
        max: 85
      })
    ], {
      verbose: true
    }))
    .pipe(gulp.dest(imgDest))
})

/**
 * Build the Harp site
 */
gulp.task('build', ['clean', 'js', 'css', 'images'], function() {
  return gulp.src('public/')
    .pipe(shell([
      'harp compile ./ dist/'
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

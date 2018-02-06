var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync').create();
var cleancss     = require('gulp-clean-css');
var concat       = require('gulp-concat');
var gcmq         = require('gulp-group-css-media-queries');
var gulp         = require('gulp');
var notify       = require('gulp-notify');
var plumber      = require('gulp-plumber');
var rename       = require('gulp-rename');
var sass         = require('gulp-sass');
var sassGlob     = require("gulp-sass-glob");
var uglify       = require('gulp-uglify');

var sassSrc = [
  'sources/sass/**/*.scss'
];

var jsSrc = [
  'sources/js/**/*.js',
];

// sass
gulp.task('styles', function() {
  gulp.src(sassSrc)
  .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
  .pipe(sassGlob())
  .pipe(plumber())
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: ['last 2 version', 'iOS >= 8.0', 'Android >= 4.0'],
    cascade: false
  }))
  .pipe(gcmq())
  .pipe(cleancss())
  .pipe(gulp.dest('./dist/css'))
  .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
  return gulp.src(jsSrc)
    .pipe(concat('script.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  browserSync.init({
    server: {
        baseDir: "./dist"
    },
    reloadDelay: 150,
    open: false,
    files: ['dist/**/*.html']
  });
  gulp.watch(sassSrc, ['styles']);
  gulp.watch(jsSrc, ['scripts']);
  gulp.watch("dist/images/**/*.+(jpg|jpeg|png|gif|svg)").on('change', browserSync.reload);
});
gulp.task('default', ['watch']);

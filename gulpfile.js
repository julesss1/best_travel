
// include plug-ins
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    server = require('gulp-develop-server'),
    browserSync = require('browser-sync').create(),
    include = require("gulp-include"),
    copyImages = require('ionic-gulp-images-copy');

var config = {
    //Include all js files but exclude any min.js files
    src: ['./app/app.js', './app/components/**/*.js', './app/components/**/**/*.js', './app/products/*.js', './app/products/**/*.js', './app/index/**/*.js', './app/index/*.js',
          './app/jobs/**/*.js', './app/jobs/*.js', './app/sitemap/**/*.js', './app/sitemap/*.js', './app/view3/**/*.js', './app/view3/*.js', '!./app/**/*/min.js', '!./app/**/**/*/min.js'],
    htmlsrc: ['./app/index.html', './app/templates/*.html', './app/components/**/*.html', './app/products/*.html', './app/jobs/*.html', './app/sitemap/*.html', './app/index/*.html', './app/view3/*.html'],
    temphtmlsrc: ['./app/templates/*.html'],
    csssrc: ['./app/app.css', './app/bower_components/html5-boilerplate/dist/css/*.css'],
    libsrc: ['./app/bower_components/**/*.min.js', '!./app/bower_components/**/index.js', '!./app/bower_components/**/ngAnimateMock.js', '!./app/bower_components/**/ngMock.js', '!./app/bower_components/**/ngMockE2E.js', '!./app/bower_components/**/core.js', '!./app/bower_components/**/core.js'],
    imgsrc: ['./app/images/']

}

//delete the output file(s)
gulp.task('clean', function () {
    //del is an async function and not a gulp plugin (just standard nodejs)
    //It returns a promise, so make sure you return that from this task function
    //  so gulp knows when the delete is complete
    return del(['./app/dist/']);
});
//delete files in js folder
gulp.task('clean-scripts', function () {
    //del is an async function and not a gulp plugin (just standard nodejs)
    //It returns a promise, so make sure you return that from this task function
    //  so gulp knows when the delete is complete
    return del(['./app/dist/js']);
});
//delete files in libs folder
gulp.task('clean-libs', function () {
    //del is an async function and not a gulp plugin (just standard nodejs)
    //It returns a promise, so make sure you return that from this task function
    //  so gulp knows when the delete is complete
    return del(['./app/dist/libs/']);
});
// Combine and minify all files from the app folder
// This tasks depends on the clean task which means gulp will ensure that the 
// Clean task is completed before running the scripts task.
gulp.task('scripts', ['clean-scripts'], function () {
    gulp.src(config.src)
      .pipe(uglify())
      .pipe(concat('all.min.js'))
      .pipe(gulp.dest('./app/dist/js/'));
});
//load libraries which are installed in bower_components folder
gulp.task('libs', ['clean-libs'], function () {
    gulp.src(config.libsrc)
      .pipe(include({
          extensions: "js",
          hardFail: true,
          includePaths: [
            __dirname + "/libs"
          ]
      }))

      .pipe(gulp.dest('./app/dist/libs/'));
});

// Clean task is completed before running the scripts task.
gulp.task('scripts:devbuild', ['clean-scripts'], function () {
    gulp.src(config.src)
      .pipe(include({
          extensions: "js",
          hardFail: true,
          includePaths: [
            __dirname + "./app/dist/libs",
            __dirname + "./app/dist/js"
          ]
      }))
      .pipe(concat('all.min.js'))
      .pipe(gulp.dest('./app/dist/js/'));
});

//deploy html filed to dist folder
gulp.task('html', function () {
    gulp.src(config.htmlsrc)
    .pipe(gulp.dest('./app/dist/'));
});
//deploy html filed to dist folder
gulp.task('html-templates', function () {
    gulp.src(config.temphtmlsrc)
    .pipe(gulp.dest('./app/dist/templates/'));
});
//css task
gulp.task('css', function () {
    gulp.src(config.csssrc)
    .pipe(gulp.dest('./app/dist/css'));
});
//watch changes on files and update browsers
gulp.task('watch', function () {
    gulp.watch(config.src, ['scripts:devbuild']).on('change', browserSync.reload);
    gulp.watch(config.htmlsrc, ['html']).on('change', browserSync.reload);
    gulp.watch(config.csssrc, ['css']).on('change', browserSync.reload);
    gulp.watch(config.imgsrc, ['imgs']).on('change', browserSync.reload);
});
//browser-sync
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: './app/dist'
        }
    })
});

//imgs
gulp.task('imgs', function () {
    gulp.src(config.imgsrc)
      .pipe(gulp.dest('./app/dist/img/'));
});


gulp.task('images', function () {
    return copyImages({ dest: './app/dist/img/' });
});

//production build
gulp.task('prod:build', ['libs', 'scripts', 'html', 'html-templates', 'css', 'browser-sync', 'watch'], function () { });
//Set a default tasks
//development build ---> files not minified for debugging
gulp.task('default', ['libs', 'scripts:devbuild', 'html', 'html-templates', 'css', 'images', 'browser-sync', 'watch'], function () { });
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');
var uglifyjs = require('gulp-uglify-es').default;

sass.compiler = require('node-sass');

var paths = {
    sass: {
        source: './sass/main.scss',
        destination: './css'
    },
    js: {
        source: './js/script.js',
        destination: './js',
        filename: 'index.bundle.js'
    },
    jsServices: {
        source: './js/services.js',
        destination: './js',
        filename: 'services.bundle.js'
    }
};

gulp.task('sass', () => {
    return gulp.src(paths.sass.source)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(uglifycss({
        "maxLineLen": 80,
        "uglyComments": true
    }))
    .pipe(gulp.dest(paths.sass.destination));
});

gulp.task('js', () => {
    return gulp.src(paths.js.source)
    .pipe(rename(paths.js.filename))
    .pipe(uglifyjs())
    .pipe(gulp.dest(paths.js.destination));
});

gulp.task('jsServices', () => {
    return gulp.src(paths.jsServices.source)
    .pipe(rename(paths.jsServices.filename))
    .pipe(uglifyjs())
    .pipe(gulp.dest(paths.jsServices.destination));
});
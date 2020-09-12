var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglifycss = require('gulp-uglifycss');

sass.compiler = require('node-sass');

var paths = {
    source : './sass/main.scss',
    destination: './css'
};

gulp.task('sass', () => {
    return gulp.src(paths.source)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(uglifycss({
        "maxLineLen": 80,
        "uglyComments": true
    }))
    .pipe(gulp.dest(paths.destination));
});
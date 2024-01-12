const gulp = require('gulp');
const webpack = require('gulp-webpack');

gulp.task('html', function () {
    return gulp.src('src/html/*.html')
        .pipe(gulp.dest('dist/html'));
});

gulp.task('css', function () {
    return gulp.src('src/css/*.css')
        .pipe(gulp.dest('dist/css'));
});

gulp.task('images', function () {
    return gulp.src('src/img/*')
        .pipe(gulp.dest('dist/img'));
});

gulp.task('webpack', function () {
    return gulp.src('src/js/index.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default', gulp.series('html', 'css', 'images', 'webpack'));

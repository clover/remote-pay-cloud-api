const gulp = require('gulp');
const del = require('del');
const webpack = require('webpack-stream');

gulp.task('clean', function () {
    return del([
        'bundle/**/*'
    ]);
});

gulp.task('bundle', () => {
    return gulp.src('./index.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('bundle/'));
});

gulp.task('default', gulp.series(['clean', 'bundle']));
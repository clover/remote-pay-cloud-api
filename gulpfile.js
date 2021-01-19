const gulp = require('gulp');
const del = require('del');
const webpack = require('webpack-stream');
const typescript = require('gulp-typescript');
// Added to ensure that our generated JS is strict mode compatible
const jshint = require('gulp-jshint');

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

gulp.task('compile', function(){
    return gulp.src(['types/index.d.ts'])
    .pipe(typescript())
});

gulp.task('lint', function() {
    return gulp.src(['*/**.js', '!./{node_modules, node_modules/**}', '!./bundle/sdk.js', '!./bundle/sdk.min.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
});

gulp.task('default', gulp.series(['clean', 'bundle', 'lint', 'compile']));
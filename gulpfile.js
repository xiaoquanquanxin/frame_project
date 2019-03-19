var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var cssnext = require("gulp-cssnext");
var postcss = require('gulp-postcss');
var postcssAssets = require('postcss-assets');          //  postcss-assets 插件用来处理图片和 SVG

gulp.task('css', function () {

    return gulp.src('src/**/*.css')
        .pipe(cssnext({
            compress: false
        }))
        .pipe(postcss([require('autoprefixer')({
            browsers: ['last 20 versions']
        })]))
        .pipe(gulp.dest('dist/'))


});

gulp.task('assets', function () {
    return gulp.src('src/**/*.css')
        .pipe(postcss([postcssAssets({
            loadPaths: ['src/**']                       //  适配任何目录
        })]))
        .pipe(gulp.dest('dist/'));
});
var gulp = require('gulp');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var miniCss = require('gulp-minify-css');
var clean = require('gulp-clean');

gulp.task('clean-old', function() {
	var manifest = require('manifest.json');
	return gulp.src()
});

gulp.task('default', function () {
    return gulp.src(['css/*.css'])
    	.pipe(miniCss())
    	//.pipe(gulp.dest('dist'))
        .pipe(rev())
        .pipe(gulp.dest('dist'))
        .pipe(rev.manifest({path: '../manifest.json'}))
        .pipe(gulp.dest('dist'))
});
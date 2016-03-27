var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('index', function () {
    var target = gulp.src('./index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['./app/scripts/**/*.js', './app/styles/**.css'],{ignorePath: 'src'});

    return target.pipe(inject(sources),{ignorePath: 'app'})
        .pipe(gulp.dest('./'));
});
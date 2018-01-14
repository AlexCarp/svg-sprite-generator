var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    clean = require('gulp-clean'),
    rename = require('gulp-rename');

gulp.task('clean', function () {
    return gulp.src('./sprite/sprite.svg')
        .pipe(clean({ force: false }));
})

var svgConfig = {
    svg: {							// General options for created SVG files
        namespaceIDs: true,						// Add namespace token to all IDs in SVG shapes
    },
    mode: {
        inline: true,
        symbol: true,		// Create a «symbol» sprite
    }
};

gulp.task('build:sprite', ['clean'], function () {
    gulp.src('./*.svg')
        .pipe(svgSprite(svgConfig))
        .pipe(rename('sprite.svg'))
        .pipe(gulp.dest('./sprite/'));
})
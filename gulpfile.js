var gulp = require('gulp')
var sass = require('gulp-sass')
var plumber = require('gulp-plumber')
var gutil = require('gulp-util')
var rename = require('gulp-rename')

gulp.task('sass', function(){
  return gulp.src('client/**/*.scss')
    .pipe(plumber(function (error) {
         gutil.log(error.message)
         this.emit('end')
     }))
    .pipe(sass())
    .pipe(rename({dirname:''}))
    .pipe(gulp.dest('client/public/styles/css'))
})

gulp.task('watch', function(){
    gulp.watch('client/**/*.scss', ['sass'])
})

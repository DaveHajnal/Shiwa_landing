const gulp = require('gulp')
const sass = require('gulp-sass')
const sassLint = require('gulp-sass-lint')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('sass', function () {
  gulp.src('./src/scss/**/base.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./dist/css/'))
})

gulp.task('sass-lint', function () {
  return gulp.src('./src/scss/**/*.s+(a|c)ss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
})

gulp.task('watch', function () {
  gulp.watch('./src/scss/**/*.scss', ['sass-lint', 'sass'])
  gulp.watch('./src/images/**/*.{gif,jpg,png,svg', ['images'])
  gulp.watch('./src/fonts/**/*.{eot,svg,ttf,woff,woff2}', ['fonts'])
})

gulp.task('fonts', function () {
  gulp.src('./src/fonts/**/*.{eot,svg,ttf,woff,woff2}')
    .pipe(gulp.dest('./dist/fonts/'))
})

gulp.task('images', function () {
  return gulp.src('./src/images/**/*.{gif,jpg,png,svg}')
    .pipe(gulp.dest('./dist/images'))
})

gulp.task('default', ['sass', 'sass-lint', 'lint', 'fonts', 'images'])

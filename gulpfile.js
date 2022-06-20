const { src, watch, dest, series } = require('gulp');

/*======= SASS & CSS =======*/
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');

/*===== IMAGE ====== */
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

function css(done) {
    src('src/scss/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer()]))
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/css'));

    done();
}
function img() {
    return src('src/img/**/*')
        .pipe(imagemin({ optimizationLevel: 3 }))
        .pipe(dest('build/img'));
}
function versionWebp() {
    const option = {
        quality: 50,
    }
    return src('src/img/**/*.{png,jpg}')
        .pipe(webp(option))
        .pipe(dest('build/img'));
}
function versionAvif() {
    const option = {
        quality: 50,
    }
    return src('src/img/**/*.{png,jpg}')
        .pipe(avif(option))
        .pipe(dest('build/img'));
}
function js() {
    return src('src/js/**/*.js')
        .pipe(dest('build/js'));
}
function dev() {
    watch('src/scss/**/*.scss', css);
    watch('src/img/**/*', img);
    watch('src/js/**/*.js', js);
}

exports.css = css;
exports.img = img;
exports.dev = dev;
exports.js = js;
exports.versionWebp = versionWebp
exports.versionAvif = versionAvif
exports.default = series(versionAvif, versionWebp, js, css, img, dev);
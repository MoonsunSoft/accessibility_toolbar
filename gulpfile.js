const { src, dest, series, parallel, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync");
const htmlmin = require("gulp-htmlmin");
const fileinclude = require("gulp-file-include");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const rimraf = require("gulp-rimraf");

// var util = import("gulp-util"),
//   concat = import("gulp-concat"),
//   cleanCSS = import("gulp-clean-css"),
//   cache = import("gulp-cache"),
//   autoprefixer = import("gulp-autoprefixer"),
//   notify = import("gulp-notify"),
//   fileinclude = import("gulp-file-include"),

function minifyHtml(cb) {
  src("src/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    // .pipe(rename({ suffix: ".min", prefix: "" }))
    .pipe(dest("dist"));
  cb();
}

function commonJs(cb) {
  src(["src/**/*.js"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(rename({ suffix: ".min", prefix: "" }))
    // .pipe(uglify())
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
  cb();
}
function buildStyles() {
  return src("src/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("dist"));
}

function browser(cb) {
  browserSync({
    server: {
      baseDir: "dist",
    },
    open: false,
    notify: false,
  });
  cb();
}

function code(cb) {
  src("app/*.html").pipe(browserSync.stream());
  cb();
}

// function sass(cb) {
//   gulp
//     .src("app/scss/**/*.scss")
//     .pipe(
//       gulpSass({
//         outputStyle: "expand",
//       }).on("error", notify.onError())
//     )
//     .pipe(rename({ suffix: ".min", prefix: "" }))
//     .pipe(autoprefixer(["last 2 versions"]))
//     .pipe(cleanCSS()) // comment on debug
//     .pipe(gulp.dest("app/css"));
//   setTimeout(() => cb(), 100);
// }

function files(cb) {
//   src(["dist/common.min.js"])
//   	.pipe(rename("acctoolbar.min.js"))
//   	.pipe(dest("dist"));
  src(["src/cursors/**/*"]).pipe(dest("dist/cursors"));
  cb();
}

function clean(cb) {
  src("dist/**").pipe(rimraf({
    force: true
  }));
  cb();
}

function myWatch(cb) {
  watch("src/**/*.scss", series(buildStyles, commonJs));
  watch("src/**/*.html", series(minifyHtml, commonJs));
  watch("src/**/*.js", parallel(commonJs));
  cb();
}

exports.build = series(minifyHtml, buildStyles, commonJs, files);
exports.clean = series(clean);
exports.default = parallel(exports.build, myWatch, browser);

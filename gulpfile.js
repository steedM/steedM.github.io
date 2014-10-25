var gulp = require('gulp'),
    gutil = require('gulp-util'),
    plumber = require('gulp-plumber'),
    notify = require("gulp-notify"),
    watch = require('gulp-watch'),

    // CSS plugins
    sass = require('gulp-sass'),
    critical = require('critical'),

    // IconsFont
    iconfont = require('gulp-iconfont')
    iconfontCss = require('gulp-iconfont-css'),

    // HTML plugins
    prettify = require('gulp-prettify'),
    path = require('path'),

    // JS Plugins
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),

    // Server = Connect
    connect = require('gulp-connect'),

    // Path variables
    dest = 'styles/',
    src = 'SRC/',
    styles = 'SRC/',
    scssPath = src + 'sass/**/*.scss',

// Copy Images
gulp.task('copyImg', function () {
    gulp.src(src + 'img/**/*.{png,svg,gif,jpg,svg}')
        .pipe(gulp.dest(dest + 'img/'))
        .pipe(connect.reload());
});

// Copy Fonts
gulp.task('copyFonts', function () {
    gulp.src(src + 'fonts/**/*.{eot,svg,ttf,woff}')
        .pipe(gulp.dest(dest + 'fonts/'))
        .pipe(connect.reload());
});

// work around for sourcemaps: https://github.com/dlmanning/gulp-sass/issues/28#issuecomment-43951089
var processWinPath = function(file) {
    var path = require('path');
    if (process.platform === 'win32') {
        file.path = path.relative('.', file.path);
        file.path = file.path.replace(/\\/g, '/');
    }
};

// compilation SASS
gulp.task('sass',  function () {
    return gulp.src(src + 'sass/*.scss')
        //.on('data', processWinPath)
        .pipe(plumber())
        .pipe(sass({
          sourceMap: 'sass',
          sourceComments: 'map',
          includePaths: require('node-bourbon').includePaths,
          includePaths: require('node-neat').includePaths,
          outputStyle: 'compressed',
          errLogToConsole: false,
          onSuccess : console.log('Build css is done'),
          onError: function(err) {
              return notify().write(err);
            }
        }))
        //.pipe(mediaqueries())
        //.pipe(minifyCSS({keepBreaks:true, keepSpecialComments: true}))
        .pipe(gulp.dest(dest + 'css/')).on('end', function(){
          console.log('Waiting...');
        })
        .pipe(connect.reload());
});

// Scripts
gulp.task('scripts', function() {
    gulp.src( ['SRC/js/components/*.js', 'SRC/js/index.js'] )
        .pipe(uglify())
        .pipe(concat('app.js'))

        .pipe(gulp.dest(dest + 'js/'))
});

// Copy Scripts
gulp.task('copyJS', function () {
    gulp.src(src + 'js/lib/*.js')
        .pipe(gulp.dest(dest + 'js/'))
        .pipe(connect.reload());
});


// Serveur connect
gulp.task('connect', function() {
  return connect.server({
    root: '',
    port: 8082,
    livereload: true
  });
});


// Livereload
gulp.task('reload-html', function () {
  return gulp.src('*.html')
    .pipe(connect.reload());
});
gulp.task('reload-css', function () {
  return gulp.src('./styles/*.css')
    .pipe(connect.reload());
});

// Watch
var watchOnce = function () {
  var log =  function(event){
    console.log('File '+event.path+' was '+event.type+', running tasks…');
  };

  gulp.watch(scssPath, ['sass','reload-css', 'reload-html' ]).on('change', log);
  gulp.watch('*.html', [ 'reload-css','reload-html']).on('change', log);
  gulp.watch(src + 'img/**/*.{png,svg,gif,jpg}', ['copyImg', 'reload-css','reload-html']).on('change', log);
  gulp.watch(src + 'fonts/**/*.{eot,svg,ttf,woff}', ['copyFonts', 'reload-css','reload-html']).on('change', log);
  gulp.watch(src + 'js/**/*.js', ['scripts', 'copyJS' ,'reload-html']).on('change', log);
}

// Default Gulp task
gulp.task('default',['sass', 'copyImg', 'copyFonts', 'scripts', 'connect'], watchOnce);

// Critical
gulp.task('critical',  function () {
     critical.generate({
        base: 'HTML/',
        src: 'product-list.html',
        dest: 'Content/css/critical.css',
        minify: true,
        width: 320,
        height: 480
    });
});

// IconFont
gulp.task('iconfont', function() {
 return gulp.src(styles + 'svg/gulp/*.svg')
    .pipe(iconfontCss({
      path: 'SRC/styles/sass/icons/gulp-templates/_icon-template.scss',
      fontName: 'efood2', // nom de la fonte, doit être identique au nom du plugin iconfont
      targetPath: '../../sass/icons/_gulp-efood.scss', // emplacement de la css finale
      fontPath: '../fonts/gulp/' // emplacement des fontes finales
    }))
    .pipe(iconfont({
      fontName: 'efood2' // identique au nom de iconfontCss
     }))
    .pipe( gulp.dest(styles + 'fonts/gulp/') )
});

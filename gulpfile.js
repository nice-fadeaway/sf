var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');//自动补全
var less = require('gulp-less');//less编译
var browserSync = require('browser-sync');//实时刷新服务器

gulp.task('less', function(){
    return gulp.src('./app/less/*.less')
		.pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 20 versions'],
            cascade: true
        }))
		.pipe(gulp.dest('./app/css/'))
});

gulp.task('browser-sync', function() {
    browserSync({
        files: "**/*.css,**/*.html,**/*.js",
        server: {
            baseDir: "app/"
        }
    });
});
//监听任务
gulp.task('mywatch',function(){
	gulp.watch(['./app/less/*.less'],['less']);
});

gulp.task('default',['browser-sync','mywatch']);






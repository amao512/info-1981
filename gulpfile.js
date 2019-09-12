var gulp 		= require('gulp');
var rename 		= require('gulp-rename');
var sass 		= require('gulp-sass');
var browserSync = require('browser-sync').create();

function css_style(done){
	gulp.src('sass/**/*.scss')
	.pipe(sass({
		errorLogToConsole: true,
		outputStyle: 'compressed'
	    }))
	.on('error', console.error.bind(console))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('css/'))
	.pipe(browserSync.stream())
	done();
}

function sync(done){
	browserSync.init({
		server: {
			baseDir: './'
		},
		port: 3000
	});
	done();
}

function browserReload(done){
	browserSync.reload();
	done();
}

function watchFiles(){
	gulp.watch('sass/**/*', css_style);
	gulp.watch('*.html', browserReload);
	gulp.watch('**/*.js', browserReload);
}

gulp.task('default', gulp.parallel(watchFiles, sync));
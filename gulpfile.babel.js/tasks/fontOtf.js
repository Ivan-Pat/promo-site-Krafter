import fonter2 from 'gulp-fonter';

export default ()=> {
    return glob.gulp.src(glob.path.src.fontOtf)
    .pipe(glob.plugins.plumber(
        glob.plugins.notify.onError({
            title: 'Fonts',
            message: "Error: <%= Error.message %>"
        })
    ))
    .pipe(fonter2({
        formats: ['ttf']
    }))
    .pipe(glob.gulp.dest(glob.path.build.fontOtf))
    .pipe(glob.plugins.browserSync.stream());
}
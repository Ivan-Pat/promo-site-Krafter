import webpack from "webpack-stream";

export default ()=> {
    return glob.gulp.src(glob.path.src.script, {sourcemaps: glob.isDev})
    .pipe(glob.plugins.plumber(
        glob.plugins.notify.onError({
            title: 'JavaScript',
            message: "Error: <%= Error.message %>"
        })
    ))
    .pipe(glob.plugins.fileInclude())
    .pipe(webpack({
        mode: glob.isProd? 'production': 'development',
        output: {
            filename: glob.isProd?'main.min.js':'main.js',
        }
        
    }))
    .pipe(glob.gulp.dest(glob.path.build.script, {sourcemaps: glob.isDev}))
    .pipe(glob.plugins.browserSync.stream());
}
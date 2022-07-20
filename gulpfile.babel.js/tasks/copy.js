

export default ()=> {
    return glob.gulp.src(glob.path.src.copy)
    .pipe(glob.gulp.dest(glob.path.build.script, {sourcemaps: glob.isDev}))
};
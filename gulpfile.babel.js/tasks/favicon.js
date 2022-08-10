export default ()=> {
    return glob.gulp.src(glob.path.src.favicon)
    .pipe(glob.gulp.dest(glob.path.build.favicon))
};
export default ()=> {
    
    return glob.gulp.src(glob.path.src.svg)
    .pipe(glob.gulp.dest(glob.path.build.svg))
};
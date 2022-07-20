import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export default ()=> {
    return glob.gulp.src(glob.path.src.images)
    .pipe(glob.plugins.plumber(
        glob.plugins.notify.onError({
            title: 'Images',
            message: "Error: <%= Error.message %>"
        })
    ))
    .pipe(glob.plugins.newer(glob.path.build.images))
    .pipe(webp())
    .pipe(glob.plugins.if(glob.isProd,
        glob.gulp.dest(glob.path.build.images)
    ))
    .pipe(glob.plugins.if(glob.isProd,
        glob.gulp.src(glob.path.src.images)
    ))
    .pipe(glob.plugins.if(glob.isProd,
        glob.plugins.newer(glob.path.build.images)
    ))
    .pipe(glob.plugins.if(glob.isProd,
        imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: true}],
            interlaced: true,
            optimizationLevel: 3 // 0-7
        })
    ))
    .pipe(glob.gulp.dest(glob.path.build.images))
    .pipe(glob.plugins.browserSync.stream());
}
import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';


export default ()=> {
    return glob.gulp.src(glob.path.src.fonttF)
    .pipe(glob.plugins.plumber(
        glob.plugins.notify.onError({
            title: 'Fonts',
            message: "Error: <%= Error.message %>"
        })
    ))
    .pipe(fonter({
        formats: ['woff']
    }))
    .pipe(glob.gulp.dest(glob.path.build.fonts))
    .pipe(glob.plugins.if(glob.isProd,
        glob.gulp.src(glob.path.src.fonttF)          // create woff2
    ))        
    .pipe(glob.plugins.if(glob.isProd,
        ttf2woff2()          
    )) 
    .pipe(glob.plugins.if(glob.isProd,
        glob.gulp.dest(glob.path.build.fonts)         
    )) 
    .pipe(glob.plugins.browserSync.stream());
}
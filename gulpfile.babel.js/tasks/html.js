
import webpHtml from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";

export default ()=> {
    return glob.gulp.src(glob.path.src.html)
    .pipe(glob.plugins.plumber(
        glob.plugins.notify.onError(error => ({
            title: "Html",
            message: error.message
        }))
    ))
    .pipe(glob.plugins.fileInclude({
        prefix: '@@',
        basepath: '@file',
    }))
    .pipe(glob.plugins.replace(/@img\//g, 'images/'))
    .pipe(glob.plugins.if(
        glob.isProd, glob.plugins.replace( 
            /.\/style\/main.css/g, '.\/style\/main.min.css'
        
    )))
    .pipe(glob.plugins.if(
        glob.isProd, glob.plugins.replace( 
            /.\/script\/main.js/g, '.\/script\/main.min.js'
        
    )))
    .pipe(webpHtml())
    .pipe(glob.plugins.if( glob.isProd,  versionNumber({
        'value': '%DT%',
        'append': {
            'key': '_v',
            'cover': 0,
            'to': [
                'css',
                'js',
            ],
        },
        'output': {
            'file': 'gulpfile.babel.js/config/version.json'
        }
    })))
    .pipe(glob.gulp.dest(glob.path.build.html))
    .pipe(glob.plugins.browserSync.stream());
}
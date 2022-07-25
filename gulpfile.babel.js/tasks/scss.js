import dartSass from "sass";
import gulpSass from "gulp-sass";

import cleancss from "gulp-clean-css";
import webpcss from "gulp-webpcss";
import autoprefixer from "gulp-autoprefixer";
import GRCSSMQ from "gulp-group-css-media-queries";



const sass = gulpSass(dartSass);

export default ()=> {
    return glob.gulp.src(glob.path.src.style, {sourcemaps: glob.isDev})
    .pipe(glob.plugins.plumber(
        glob.plugins.notify.onError({
            title: 'Style SCSS',
            message: "Error: <%= Error.message %>"
        })
    ))
    .pipe(glob.plugins.replace(/@img\//g, '../images/'))
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(GRCSSMQ())
    .pipe(webpcss({
        webpClass: ".webp",
        noWebpClass: ".no-webp"
    }))
    .pipe(glob.plugins.if(glob.isProd, autoprefixer({
        grid: true,
        overrideBrowserslist: ["last 3 versions"],
        cascade: true,
    })))
    .pipe( glob.plugins.if(glob.isProd, cleancss()))
    .pipe(glob.plugins.if(glob.isProd, 
        glob.plugins.rename({
            extname: ".min.css"
    })))
    .pipe(glob.gulp.dest(glob.path.build.style, {sourcemaps: glob.isDev}))
    .pipe(glob.plugins.browserSync.stream());
}
import gulp from "gulp";
import  path  from "./config/path";
import plugins from "./config/basicPlugins";

const isProd = process.argv.includes("--production");
const isDev = !isProd;

global.glob = {
    path: path,
    gulp: gulp,
    plugins: plugins,
    isProd: isProd,
    isDev: isDev,
}


import reset from "./tasks/reset";
import svg from "./tasks/svg";
import html from "./tasks/html";
import server from "./tasks/server";
import scss from "./tasks/scss";
import script from "./tasks/script";
import images from "./tasks/images";
import fonttF from "./tasks/fonttF";
import fontOtf from "./tasks/fontOtf";
import fontFase from "./tasks/fontFase";
import copyJS from "./tasks/copy";
import ZIP from "./tasks/zip";



function watcher() {
    // gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.style, scss)
    gulp.watch(path.watch.script, script)
    gulp.watch(path.watch.images, images)
    gulp.watch(path.watch.svg, svg)
    // gulp.watch(path.watch.fonts, fonts)
}

const fonts = gulp.series(fontOtf, fonttF, fontFase)
const mainTask = gulp.parallel( html, scss, script, copyJS, images, svg, fonts ) 

const build = gulp.series(reset, mainTask, gulp.parallel(watcher, server));
const production = gulp.series(reset, mainTask)
const archive = gulp.series(reset, mainTask, ZIP )

export {build};
export {production};
export {archive};

export default isProd? production: build ;



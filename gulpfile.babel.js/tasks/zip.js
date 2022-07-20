import del from "del";
import zipPlugin from 'gulp-zip'

export default ()=> {
    del(`./*.zip`)

    return glob.gulp.src(`${glob.path.public}**/*.*`)
    .pipe(glob.plugins.plumber(
        glob.plugins.notify.onError({
            title: 'ZIP',
            message: "Error: <%= Error.message %>"
        })
    ))
    .pipe(zipPlugin(`${glob.path.rootFolder}.zip`))
    .pipe(glob.gulp.dest('./'))
    
}
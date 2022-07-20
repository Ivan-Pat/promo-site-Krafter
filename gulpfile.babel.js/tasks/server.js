export default (done)=> {
    glob.plugins.browserSync.init({
        server: {
            baseDir: `${glob.path.build.html}`
        }, 
        notify: false,
        port: 3000,
    })
}
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

export default {
    build: {
        html: `./public/`,
        style: `./public/style`,
        script: `./public/script`,
        images: `./public/images`,
        fonts: `./public/fonts`,
        fontOtf: `./source/assets/fonts`,
        files: `./public/style`,
        svg: `./public/images/svg`,
        favicon: `./public/images/favicon`,
    },
    src: {
        html: `./source/*.html`,
        style: `./source/assets/style/*.scss`,
        fontFace: `./source/assets/style/common/_fonts.scss`,
        images: [`./source/assets/images/**/*.{jpg,jpeg,png,gif,webp}`, `!./source/assets/images/favicon/**.*`],
        svg: `./source/assets/images/svg/**/*.svg`,
        script: [`./source/assets/script/**.js`, `!./source/assets/script/checkWebp.js`],
        files: `./source/style/**/*.css`,
        fonttF: `./source/assets/fonts/**/*.{ttf,woff,woff2,svg}`,
        fontOtf: `./source/assets/fonts/**/*.{otf,}`,
        copy: `./source/assets/script/modules/checkWebp.js`,
        favicon: `./source/assets/images/favicon/**.*`,
    },
    watch: {
        html: `./source/**/*.html`,
        style: `./source/assets/style/**/*.scss`,
        images: `./source/assets/images/**/*.{jpg,jpeg,png,gif,webp,ico}`,
        svg: `./source/assets/images/svg/**/*.svg`,
        script: `./source/assets/script/**/*.js`,
        fonts: `./source/assets/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}`,
        //files: `./source/files/**/*.*`,
    },
    rootFolder: rootFolder,
    clean: `./public`,
    public: `./public/`,
    
}


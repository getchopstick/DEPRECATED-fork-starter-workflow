// ---
// CONFIG FILE
// Define your tasks & variables here
// ---

module.exports = {

    base: 'src/Frontend/Themes/theme_name/',

    scss: {
        src: module.exports.base + 'Core/Layout/Scss/**/*.scss',
        settings: {
            outputStyle: 'compressed'
        },
        cssDest: module.exports.base + 'Core/Layout/Css/',
        prefix: [ // Autoprefixer supported browsers
            'last 2 version',
            '> 1%',
            'ie 8',
            'ie 9',
            'ios 6',
            'android 4'
        ]
    },

    lint: {
        src: module.exports.base + 'Core/Layout/Scss/**/*.scss',
        settings: {
            'config': 'lint.yml'
        }
    },

    js: {
        src : [  // source js file
            module.exports.base + 'Core/Js/theme.js',
            module.exports.base + 'Core/Js/_components/*.js',
            module.exports.base + 'Core/Js/loader.js'

        ],
        concatFilename: module.exports.base + 'theme.concat.js', // result filename
        jsDest: module.exports.base + 'Core/Js/'
    },

    browsersync: {
        server: {
            baseDir: './_site',
            reloadDelay: 2000,
            debounce: 200,
            notify: true,
            ghostMode: {
                clicks: true,
                location: true,
                forms: true,
                scroll: false
            }
        }
    },

    watch: {
        assets: [    // Files that trigger a Jekyll rebuild
            module.exports.base + 'Core/Layout/Img/png/*.png',
            module.exports.base + 'Core/Layout/Img/jpg/*.jpg',
            module.exports.base + 'Core/Layout/Img/svg/*.svg',
            module.exports.base + 'Core/Layout/Templates/**/*.tpl',
            module.exports.base + 'Modules/**/*.tpl'
        ]
    },

};

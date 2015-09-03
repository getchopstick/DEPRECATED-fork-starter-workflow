// ---
// CONFIG FILE
// Define your tasks & variables here
// ---

var themeName ='theme_name';
var themePath = 'src/Frontend/Themes/'+ themeName +'/';

module.exports = {

    scss: {
        src: themePath + 'Core/Layout/Scss/**/*.scss',
        settings: {
            outputStyle: 'compressed'
        },
        cssDest: themePath + 'Core/Layout/Css/',
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
        src: themePath + 'Core/Layout/Scss/**/*.scss',
        settings: {
            'config': 'lint.yml'
        }
    },

    js: {
        src : [  // source js file
            themePath + 'Core/Js/theme.js',
            themePath + 'Core/Js/_components/*.js',
            themePath + 'Core/Js/loader.js'

        ],
        concatFilename: themePath + 'theme.concat.js', // result filename
        jsDest: themePath + 'Core/Js/'
    },

    browsersync: {
        proxy: themeName +'.dev'
    },

    watch: {
        assets: [    // Files that trigger a rebuild
            themePath + 'Core/Layout/Img/png/*.png',
            themePath + 'Core/Layout/Img/jpg/*.jpg',
            themePath + 'Core/Layout/Img/svg/*.svg',
            themePath + 'Core/Layout/Templates/**/*.tpl',
            themePath + 'Modules/**/*.tpl'
        ]
    },

};

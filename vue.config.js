module.exports = {
    assetsDir: 'src/assets',
    pluginOptions: {
        lintStyleOnBuild: true,
        stylelint: {
            fix: false, // boolean (default: true)
            files: ['src/**/*.{vue,htm,html,css,sss,less,scss}']
        }
    }
}
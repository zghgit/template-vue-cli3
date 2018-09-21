const mock = require('./mock');

module.exports = {
    assetsDir: 'src/assets',

    devServer: {
        before(app) { mock(app); }
    },

    pluginOptions: {
        lintStyleOnBuild: true,
        stylelint: {
            fix: false, // boolean (default: true)
            files: ['src/**/*.{vue,htm,html,css,sss,less,scss}']
        }
    },

    lintOnSave: undefined
}
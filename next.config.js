const withImages = require('next-images')

module.exports = {
    i18n: {
        locales: ['en', 'ru'],
        defaultLocale: 'en',
    },
    webpack(config, options) {
        const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'))
        fileLoaderRule.exclude = /\.svg$/
        config.module.rules.push({
            use: [{
                loader: '@svgr/webpack', options: {
                    prettier: false,
                    svgo: true,
                    svgoConfig: {
                        plugins: [{removeViewBox: false}],
                    },
                    titleProp: true,
                }
            }],
            issuer: { and: [/\.(js|ts)x?$/] },
            test: /\.svg$/i
        });

        return config;
    },
}
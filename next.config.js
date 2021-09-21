const withImages = require('next-images')

module.exports = withImages({
    i18n: {
        locales: ['en', 'ru'],
        defaultLocale: 'en',
    },
})
export default () => ({
    'oembed': {
        enabled: true,
    },
    'webp-converter': {
        enabled: true,
        config: {
            // mimeTypes that converts to WebP. Default is ['image/png', 'image/jpeg', 'image/jpg']
            mimeTypes: ['image/png', 'image/jpeg', 'image/jpg'],
            options: {
                // WebP options: https://sharp.pixelplumbing.com/api-output#webp
            },
        },
    }
});

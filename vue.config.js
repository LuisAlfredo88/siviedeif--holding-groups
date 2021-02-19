module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/siviedeif--holding-groups/'
      : '/',
    // pwa: {
    //     workboxPluginMode: 'InjectManifest',
    //     workboxOptions: {
    //             swSrc: 'public/service-worker.js',
    //     }
    // }
  }

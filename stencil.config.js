
const sass = require('@stencil/sass');

exports.config = {
  namespace: 'cw-latest-news',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: false
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/sass/variables.scss',
        'src/sass/base.scss'
      ]
    })
  ]
};

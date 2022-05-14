const path = require('path');

const testMode = process.env.NODE_ENV === 'test';

module.exports = {
  lintOnSave: false,
  productionSourceMap: false,

  chainWebpack: (config) => {
    if (testMode) {
      config.merge({
        devtool: 'eval',
      });
      config.module
        .rule('istanbul')
        .test(/\.(js|vue)$/)
        .include
        .add(path.resolve(__dirname, '/src'))
        .end()
        .use('istanbul-instrumenter-loader')
        .loader('istanbul-instrumenter-loader')
        .options({ esModules: true })
        .before('babel-loader');
    }
  },
};

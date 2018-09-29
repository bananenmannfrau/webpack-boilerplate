const commonConfigs = require('./commonConfigs');
const path = require('path');
const root = path.resolve(__dirname, '..');

const developmentConfig = Object.assign({}, commonConfigs, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    watchOptions: {
      ignored: /node_modules/
    }
  }
});

module.exports = developmentConfig;

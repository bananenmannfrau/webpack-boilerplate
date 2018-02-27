const commonConfigs = require("./commonConfigs");

const developmentConfig = Object.assign({}, commonConfigs, {
  mode: "development",
  devtool: "source-map"
});

module.exports = developmentConfig;

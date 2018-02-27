const commonConfigs = require("./commonConfigs");

const developmentConfig = Object.assign({}, commonConfigs, {
  mode: "production"
});

module.exports = developmentConfig;

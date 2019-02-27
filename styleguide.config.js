const path = require('path');
const glob = require('glob');

module.exports = {
  title: 'Documentación componenetes react',
  webpackConfig: require('react-scripts/config/webpack.config.js'),
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withDefaultConfig({ propFilter: { skipPropsWithoutDoc: false } }).parse,
  dangerouslyUpdateWebpackConfig(webpackConfig, env) {
    webpackConfig.output = {
      ...webpackConfig.output,
      publicPath: process.env.PUBLIC_URL || ''
    };
    return webpackConfig;
  }
};
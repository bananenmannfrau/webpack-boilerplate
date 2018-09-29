const path = require('path');
const root = path.resolve(__dirname, '..');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const babelTransformJSX = require('@babel/plugin-transform-react-jsx');

module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(root, 'dist')
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [babelTransformJSX]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true, importLoaders: 1 }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: `${root}/configs/`
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ title: 'IndexJS template', template: `${root}/index.html` })]
};

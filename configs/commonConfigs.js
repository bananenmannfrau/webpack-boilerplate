const path = require('path');
const root = path.resolve(__dirname, '..');

module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(root, 'dist'),
    publicPath: '/dist/'
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
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true, importLoaders: 1 }
          },
          'postcss-loader'
        ]
      }
    ]
  }
};

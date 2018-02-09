const path = require('path');
const root = path.resolve(__dirname, '..');

module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(root, 'dist'),
    publicPath: '/dist/'
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
          { loader: 'css-loader', options: { modules: true, importLoaders: 1 } },
          'postcss-loader'
        ]
      }
    ]
  }
};

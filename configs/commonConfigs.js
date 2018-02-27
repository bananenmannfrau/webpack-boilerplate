const path = require("path");
const root = path.resolve(__dirname, "..");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(root, "dist"),
    publicPath: "/dist/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", "jsx", ".json"]
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { modules: true, importLoaders: 0 }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: true
            }
          },
          "ts-loader"
        ]
      }
    ]
  }
};

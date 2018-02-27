const path = require("path");
const root = path.resolve(__dirname, "..");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(root, "dist"),
    publicPath: "/dist/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", "jsx", ".json"]
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
            options: { modules: true, importLoaders: 1 }
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

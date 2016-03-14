import path from "path";
import webpack from "webpack";


export default {
  // or devtool: "eval" to debug issues with compiled output:
  devtool: "cheap-module-eval-source-map",
  entry: [
    // necessary for hot reloading with IE:
    "eventsource-polyfill",
    // listen to code updates emitted by hot middleware:
    "webpack-hot-middleware/client",
    // your code:
    "./src/index",
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/",
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: {},
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("development")
      }
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ["babel"],
        include: path.join(__dirname, "src"),
      },
      {
        test: /\.css$/,
        loaders: [
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  }
};

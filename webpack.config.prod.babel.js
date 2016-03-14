import path from "path";
import webpack from "webpack";


export default {
  devtool: "source-map",
  entry: [
    "./src/index"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: {},
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ["babel"],
        include: path.join(__dirname, "src")
      },
      {
        test: /\.css$/,
        loaders: [
          "style-loader",
          "css-loader",
          'autoprefixer-loader?{browsers:["last 3 version", "> 1%"]}',
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          "style-loader",
          "css-loader",
          "sass-loader",
          'autoprefixer-loader?{browsers:["last 3 version", "> 1%"]}',
        ],
      },
    ]
  }
};

import path from "path";
import express from "express";
import webpack from "webpack";
import config from "./webpack.config.dev.babel";
import createWebpackDevMiddleware from "webpack-dev-middleware";


var app = express();
var compiler = webpack(config);

app.use(createWebpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.use("/public", express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening at http://localhost:3000");
});

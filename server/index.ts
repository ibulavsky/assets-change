import express from "express";
import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "../webpack.config.dev";
import api from "./api";

const PORT = '3000';

const compiler = webpack(webpackConfig);
const app = express();

app.use(webpackMiddleware(compiler));

// @ts-ignore
app.use(webpackHotMiddleware(compiler, {
    hot: true,
    reload: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
  })
);

app.use("/api", api);

app.get("*", app.use(express.static("public")));

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}.`);
});

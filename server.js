const express = require('express');
const webpack = require('webpack');

const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config');
const webpackhotMiddleware = require('webpack-hot-middleware')
const app = express();

const compiler = webpack(webpackConfig);

const devMiddleware = webpackDevMiddleware(compiler, {publicPath: '/'});

const hotMiddleware = webpackhotMiddleware(compiler);

app.use(devMiddleware);
app.use(hotMiddleware);

app.listen(3500, () => {
    console.log('listening to port')
})
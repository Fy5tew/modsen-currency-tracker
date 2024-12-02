const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

const plugins = [
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
    }),
];

module.exports = merge(common, {
    mode: 'development',
    target: 'web',
    plugins,
    devtool: 'inline-source-map',
    output: {
        filename: '[name].[contenthash].js',
    },
});

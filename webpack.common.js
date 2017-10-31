const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const APP_DIR = path.resolve(__dirname, 'src')
const BUILD_DIR = path.resolve(__dirname, 'build')

const config = {
	entry: {
		app: APP_DIR + '/app.tsx'
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract('css-loader')
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract([
					'css-loader',
					'postcss-loader',
					'sass-loader'
				])
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: 'happypack/loader?id=tsx'
			}
		]
	},
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.ProvidePlugin({ Promise: 'core-js/fn/promise' }),
		new ExtractTextPlugin('./style.css'),
		new ForkTsCheckerWebpackPlugin()
	],
	resolve: {
		extensions: ['.js', 'jsx', '.ts', '.tsx']
	},
	devtool: 'source-map'
}

module.exports = config

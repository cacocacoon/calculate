const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader'
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: [{ loader: 'css-loader' }]
				})
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: [{ loader: 'css-loader' }, { loader: 'postcss-loader' }, { loader: 'sass-loader' }]
				})
			}
		]
	},
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.ProvidePlugin({ Promise: 'core-js/fn/promise' }),
		new ExtractTextPlugin(BUILD_DIR + '/style.css'),
		new webpack.NoEmitOnErrorsPlugin()
	],
	resolve: {
		extensions: ['.js', 'jsx', '.ts', '.tsx']
	},
	devServer: {
		contentBase: BUILD_DIR,
		inline: true,
		port: 8080
	},
	devtool: 'source-map',
	watch: true,
	watchOptions: {
		ignored: /node_modules/
	}
}

module.exports = config

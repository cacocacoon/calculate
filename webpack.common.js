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
		// 讓編譯出來的程式碼在瀏覽器跑起來較快
		new webpack.optimize.ModuleConcatenationPlugin(),
		// 可減少編譯出來的檔案大小
		new webpack.optimize.OccurrenceOrderPlugin(),
		// 編譯的時候如果丟出錯誤不會停止編譯
		new webpack.NoEmitOnErrorsPlugin(),
		// 如程式碼遇到 Promise 變數，自動到 core-js/fn/promise 抓
		new webpack.ProvidePlugin({ Promise: 'core-js/fn/promise' }),
		// 將 css code 全放在 style.css
		new ExtractTextPlugin('./style.css'),
		// 可加快編譯速度
		// new ForkTsCheckerWebpackPlugin()
	],
	resolve: {
		extensions: ['.js', 'jsx', '.ts', '.tsx']
	},
	devtool: 'source-map'
}

module.exports = config

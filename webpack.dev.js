const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const BUILD_DIR = path.resolve(__dirname, 'build')

const config = {
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: BUILD_DIR,
		hot: true,
		port: 8080
	}
}

module.exports = merge(common, config)

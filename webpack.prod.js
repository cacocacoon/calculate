const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const HappyPack = require('happypack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const config = {
	plugins: [
		new HappyPack({
			id: 'tsx',
			threads: 4,
			loaders: [
				'babel-loader',
				{
					loader: 'ts-loader',
					options: { happyPackMode: true }
				}
			]
		}),
		new UglifyJSPlugin({ sourceMap: true }),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		})
	],
	watch: true,
	watchOptions: {
		ignored: /node_modules/
	}
}

module.exports = merge(common, config)

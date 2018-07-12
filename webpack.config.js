const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.bundle.js'
	},
	devServer: {
		port: 3030,
		open: true,
		compress: true,
		stats: 'minimal',
		contentBase: path.join(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' }
				]
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[hash:12].[ext]',
							outputPath: 'images/',
							publicPath: 'images/'
						}
					},
					{
						loader: 'image-webpack-loader'
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Index Page',
			hash: true,
			template: 'src/index.html'
		}),
		new HtmlWebpackPlugin({
			title: 'Login/Signup page',
			hash: true,
			filename: 'login.html',
			template: 'src/login.html'
		})
	]
};

module.exports = config;

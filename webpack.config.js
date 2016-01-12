module.exports = {
	entry: {
		DateString: "./src/DateString.js",
		example: "./example/example.js"
	},
	output: {
		path: "dist",
		filename: "[name].js",
		libraryTarget: 'umd',
		library: "[name]"
	},
	externals: {
		"datestring": {
			commonjs: 'datestring',
			commonjs2: 'datestring',
			amd: 'DateString',
			root: 'DateString'
		}
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel",
				query: {
					presets: ['es2015']
				}
			}
		]
	}
};
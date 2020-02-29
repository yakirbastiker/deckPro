const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/game.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude:/(node_modules)/,
                loader: "babel-loader",
                query:{
                    presets: ['latest']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
}   
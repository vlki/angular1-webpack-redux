var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/app.module.js',

    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.html/,
                exclude: /index\.webpack\.html/,
                loaders: ['ngtemplate?relativeTo=' + __dirname, 'html']
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'html?attrs[]=link:href!' + __dirname + '/index.webpack.html'
        })
    ],

    devtool: 'eval',

    devServer: {
        // Means that all requests which does not match any asset will be
        // served by the index.html
        historyApiFallback: true
    }
};

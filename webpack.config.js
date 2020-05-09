const path = require( 'path' );
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = 
{
    mode    : 'development',
    devtool : 'inline-source-map',
    entry   : './src/index.js',
    output  : 
    {
        filename   : 'main.js',
        path       : path.resolve( __dirname, 'dist' )
    },
    resolve: 
    {
        // alias: 
        // {
        //     'uv' : path.join( __dirname, 'node_modules/universalviewer/dist/' )
        // }
    },
    module: 
    {
        rules: 
        [
            {
                test    : /\.(js|jsx)$/,
                exclude : /node_modules/,
                use : 
                {
                    loader : "babel-loader"
                }
            },
            {
                test : /\.html$/,
                use  : 
                [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: 
                [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: 
    [
        new HtmlWebPackPlugin(
        {
            template: "./src/index.html",
            filename: "./index.html"
        } )
    ]

};

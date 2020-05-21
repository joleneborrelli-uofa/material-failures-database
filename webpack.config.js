const path = require( 'path' );
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );

module.exports = 
{
    mode    : 'development',
    devtool : 'inline-source-map',
    entry   : './src/index.js',
    output  : 
    {
        filename : 'main.js',
        path     : path.resolve( __dirname, 'dist' )
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
                    loader : 'babel-loader'
                }
            },
            {
                test : /\.html$/,
                use  : 
                [
                    {
                        loader: 'html-loader'
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
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 
                [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: 
    [
        new HtmlWebPackPlugin(
        {
            template: './src/index.html',
            filename: './index.html'
        } )
    ]

};

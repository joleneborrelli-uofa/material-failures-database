const path = require( 'path' );

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
    resolve: 
    {
        alias: 
        {
            'uv' : path.join( __dirname, 'node_modules/universalviewer/dist/' )
        }
    }
};
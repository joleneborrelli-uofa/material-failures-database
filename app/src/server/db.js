const sqlite3 = require( 'sqlite3' ).verbose();
const path    = require( 'path' );
const dbPath  = path.resolve( __dirname, 'material_failures_database.db' );

const database = new sqlite3.Database( dbPath, sqlite3.OPEN_READONLY, ( err ) => 
{
    if ( err ) 
    {
        console.log( err.message )
    } 
    else 
    {
        console.log( 'Connected to material failures database' )
    }
} );

module.exports = database;

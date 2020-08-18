const sqlite3 = require( 'sqlite3' ).verbose();
const path    = require( 'path' );
const dbPath  = path.resolve( __dirname, 'material_failures_database.db' );

const openDatabase = async ( mode ) => 
{
    let database;

	return new Promise( ( resolve, reject ) =>
    {
        database = new sqlite3.Database( dbPath, sqlite3[mode], ( err ) => 
        {
            if ( err ) 
            {
                console.log( err.message )

                reject( err );
            } 
            else 
            {
                console.log( 'Connected to material failures database' )
                
                resolve( database );
            }
        } );

    } );
}

module.exports = openDatabase;

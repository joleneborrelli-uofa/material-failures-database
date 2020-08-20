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
};

/**
 * Executes a get query, where all rows are returned
 *
 * @param  { String } sql       query string
 * @param  { String } tableName table name
 * @return { Promise } 
 */
const all = async ( sql, tableName ) => 
{
    try
    {
        let database = await openDatabase( 'OPEN_READONLY' );

        let callDatabaseAll = () => 
        {
            return new Promise( ( resolve, reject ) => 
            {
                database.all( sql, ( error, result ) =>
                {
                    if ( error ) 
                    {
                        reject( new Error( `Error in get from ${ tableName } table: ${ error }` ) );
                    } 
                    else
                    {
                       resolve( result );
                    }
                } );
            } );
        };

        let closeDatabase = () =>
        {
            return new Promise( ( resolve, reject ) =>
            {
                database.close( ( error ) => 
                {
                    if ( error ) 
                    {
                        reject( new Error( `Error in all database close: ${ error }` ) );
                    }
                    else
                    {
                        console.log( `Disconnected from material failures database after all in ${ tableName }` )

                        resolve();
                    }                    
                } );
            } )
        };

        let databaseAll = await callDatabaseAll();
        let close       = await closeDatabase();

        return databaseAll;
    }
    catch ( error )
    {
        console.log( error.message );
    }
};

/**
 * Executes a get query, where the first row is returned
 *
 * @param  { String } sql       query string
 * @param  { String } tableName table name
 * @return { Promise } 
 */
const get = async ( sql, tableName ) => 
 {
    try
    {
        let database = await openDatabase( 'OPEN_READONLY' );

        let callDatabaseGet = () => 
        {
            return new Promise( ( resolve, reject ) => 
            {
                database.get( sql, ( error, result ) =>
                {
                    if ( error ) 
                    {
                        reject( new Error( `Error in get from ${ tableName } table: ${ error }` ) );
                    } 
                    else
                    {
                       resolve( result );
                    }
                } );
            } );
        };

        let closeDatabase = () =>
        {
            return new Promise( ( resolve, reject ) =>
            {
                database.close( ( error ) => 
                {
                    if ( error ) 
                    {
                        reject( new Error( `Error in all database close: ${ error }` ) );
                    }
                    else
                    {
                        console.log( `Disconnected from material failures database after get in ${ tableName }` )

                        resolve();
                    }                    
                } );
            } )
        };

        let databaseGet = await callDatabaseGet();
        let close       = await closeDatabase();

        return databaseGet;
    }
    catch ( error )
    {
        console.log( error.message );
    }
};

/**
 * Executes an update query, where the first row is returned
 *
 * @param  { String } sql       query string
 * @param  { String } tableName table name
 * @param  {}
 * @return { Promise } 
 */
const update = async ( sql, tableName ) =>
{
    try
    {
        let database = await openDatabase( 'OPEN_READWRITE' );

        let callDatabaseRun = () => 
        {
            return new Promise( ( resolve, reject ) => 
            { 
                database.run( sql, ( error ) =>
                {
                    if ( error ) 
                    {
                        reject( new Error( `Error in update in ${ tableName } table : ${ error }` ) );
                    } 
                    else
                    {
                        resolve();
                    }
                } );
            } )
        };

        let closeDatabase = () =>
        {
            return new Promise( ( resolve, reject ) =>
            {
                database.close( ( error ) => 
                {
                    if ( error ) 
                    {
                        reject( new Error( `Error in all database close: ${ error }` ) );
                    }
                    else
                    {
                        console.log( `Disconnected from material failures database after run in ${ tableName }` )

                        resolve();
                    }                    
                } );
            } )
        };

        let databaseRun = await callDatabaseRun();
        let close       = await closeDatabase();

        return;
    }
    catch ( error )
    {
        console.log( error.message );
    }  
};

exports.all    = all;
exports.get    = get;
exports.update = update;

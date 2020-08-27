const sqlite3 = require( 'sqlite3' ).verbose();
const path    = require( 'path' );
const dbPath  = path.resolve( __dirname, 'material_failures_database.db' );

const openDatabase = async ( mode ) => 
{
    let database;

	return new Promise( ( resolve, reject ) =>
    {
        database = new sqlite3.Database( dbPath, sqlite3[mode], ( error ) => 
        {
            if ( error ) 
            {
                reject( `error connecting to the database: ${ error }` );
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
 * Executes an all query, where all rows are returned
 *
 * @param  { String } sql       query string
 * @param  { String } tablename table name
 * @return { Promise } 
 */
const all = async ( sql, tablename ) => 
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
                    reject( `in 'database.all' during query in ${ tablename } table: ${ error }` );
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
                    reject( `in all 'database.close': ${ error }` );
                }
                else
                {
                    console.log( `Disconnected from material failures database after 'database.all' in ${ tablename }` )

                    resolve();
                }                    
            } );
        } )
    };

    let databaseAll = await callDatabaseAll();
    let close       = await closeDatabase();

    return databaseAll;
};

/**
 * Executes a get query, where the first row is returned
 *
 * @param  { String } sql       query string
 * @param  { String } tablename table name
 * @return { Promise } 
 */
const get = async ( sql, tablename ) => 
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
                    reject( `in 'database.get' during query in ${ tablename } table: ${ error }` );
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
                    reject( `in get 'database.close': ${ error }` );
                }
                else
                {
                    console.log( `Disconnected from material failures database after 'database.get' in ${ tablename }` )

                    resolve();
                }                    
            } );
        } )
    };

    let databaseGet = await callDatabaseGet();
    let close       = await closeDatabase();

    return databaseGet;
};

/**
 * Executes an update query, where the first row is returned
 *
 * @param  { String } sql       query string
 * @param  { String } tablename table name
 * @param  {}
 * @return { Promise } 
 */
const update = async ( sql, tablename ) =>
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
                    reject( `in 'database.update' during query in ${ tablename } table : ${ error }` );
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
                    reject( `in update 'database.close': ${ error }` );
                }
                else
                {
                    console.log( `Disconnected from material failures database after 'database.run' in ${ tablename }` )

                    resolve();
                }                    
            } );
        } )
    };

    let databaseRun = await callDatabaseRun();
    let close       = await closeDatabase();

    return;
};

exports.all    = all;
exports.get    = get;
exports.update = update;
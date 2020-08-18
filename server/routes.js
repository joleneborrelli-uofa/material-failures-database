const openDatabase = require( './db.js' );
const helpers      = require( './helpers.js' );
const constants    = require( './constants' );

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

const routes =
{
    // Record route
    record : async ( request, response ) =>
    {
        const 
        { 
            generateSql,
            formatByHeader 
        } = helpers;

        let recordTables = {};

        const { defaultRecordTables : tables } = constants;

        try
        {
            for( let i = 0; i < tables.length; i++ )
            {
                let tableName = tables[i];
                let sql = generateSql( tableName, request.query.id );

                recordTables[tableName] = await all( sql, tableName );
            }

            // Add object table
            sql = generateSql( 'object', request.query.id );

            recordTables.object = await get( sql, 'object' );            

            recordTables = helpers.formatByHeader( recordTables );
        }
        catch( error )
        {
            response.json( 
            { 
                message: `Error in record tables response: ${ error }` 
            } )
        }

        response.json( recordTables );

    },

    // Study route
    study : async ( request, response ) =>
    {
        const 
        { 
            generateSql,
            formatByHeader
        } = helpers;

        let caseStudyTables = {};
        const visibleTables = request.query.visibleTables || [];

        const tables = 
        [ 
            ...visibleTables, 
            ...constants.defaultCaseStudyTables
        ];

        try
        {
            for( let i = 0; i < tables.length; i++ )
            {
                let tableName = tables[i];
                let sql = generateSql( tableName, request.query.id );

                caseStudyTables[tableName] = await all( sql, tableName );
            }

            // Add object table
            sql = generateSql( 'object', request.query.id );

            caseStudyTables.object = await get( sql, 'object' );            

            caseStudyTables = formatByHeader( caseStudyTables );
        }
        catch( error )
        {
            response.json( 
            { 
                message: `Error in case study tables response: ${ error }` 
            } )
        }

        response.json( caseStudyTables );
    },

    // Display route
    display : async ( request, response ) =>
    {
        const sql = `SELECT display.object_id, 
                            display.case_study, 
                            display.record, 
                            display.path
                     FROM display`;

        return all( sql, 'display' )
                .then( table =>
                {
                    response.json( table );
                } )
                .catch( error => 
                {
                    response.json( 
                    { 
                        message: `Error in display table response: ${ error }` 
                    } )
                } )
    },

    // Settings route
    settings : async ( request, response ) =>
    {
        const sql = `SELECT display.object_id, 
                            display.case_study, 
                            display.record, 
                            display.path, 
                            object.name
                    FROM display
                    INNER JOIN object ON display.object_id=object.object_id`;

        return all( sql, 'display' )
                .then( table =>
                {
                    response.json( table );
                } )
                .catch( error => 
                {
                    response.json( 
                    { 
                        message: `Error in settings response: ${ error }` 
                    } )
                } )
    },

    // Toggle route
    toggle : async ( request, response ) =>
    {
        const fieldString  = request.body.fieldString;
        const objectString = request.body.objectString;

        const sql = `UPDATE display
                     SET ${ fieldString }
                     WHERE ${ objectString }`;

         return update( sql, 'display' )
                .then( () => 
                {
                    response.json();
                } )
                .catch( error => 
                {
                    response.json( 
                    { 
                        message: `Error in settings table response: ${ error }` 
                    } )
                } )
    },

    // Visibility routes
    visibility : 
    {
        prompt : async ( request, response ) =>
        {
            const 
            { 
                generateSql,
                formatByPromptVisibility
            } = helpers;
            
            const sql = generateSql( 'prompt_visibility', request.query.id );

            return get( sql, 'prompt visibility' )
                    .then( table => formatByPromptVisibility( table ) )
                    .then( table =>
                    {
                        response.json( table );
                    } )
                    .catch( error => 
                    {
                        response.json( 
                        { 
                            message: `Error in prompt visibility table response: ${ error }` 
                        } )
                    } )
        },

        field : async ( request, response ) =>
        {
            const 
            { 
                generateSql,
                formatByValueVisibility 
            } = helpers;

            const sql = generateSql( 'field_visibility', request.query.id );

            return get( sql, 'field visibility' )
                    .then( table => formatByValueVisibility( table ) )
                    .then( table =>
                    {
                        response.json( table );
                    } )
                    .catch( error => 
                    {
                        response.json( 
                        { 
                            message: `Error in field visibility table response: ${ error }` 
                        } )
                    } )
        }
    }
}

module.exports = routes;  

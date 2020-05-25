const database  = require( './db.js' );
const helpers   = require( './helpers.js' );
const constants = require( './constants' );

/**
 * Executes a get query, where all rows are returned
 *
 * @param  { String } sql       query string
 * @param  { String } tableName table name
 * @return { Promise } 
 */
const all = ( sql, tableName ) => 
{
    return new Promise( ( resolve, reject ) =>
    {
        database.all( sql, ( error, result ) =>
        {
            if ( error ) 
            {
                console.log( `Error in get from ${ tableName } table`, error )

                reject( error )
            } 
            else 
            {
                resolve( result )
            }
        } )
    } )  
};

/**
 * Executes a get query, where the first row is returned
 *
 * @param  { String } sql       query string
 * @param  { String } tableName table name
 * @return { Promise } 
 */
const get = ( sql, tableName ) => 
{
    return new Promise( ( resolve, reject ) =>
    {
        database.get( sql, ( error, result ) =>
        {
            if ( error ) 
            {
                console.log( `Error in get from ${ tableName } table`, error )

                reject( error )
            } 
            else 
            {
                resolve( result )
            }
        } )
    } )  
};

const routes =
{
    // All route
    all : async ( request, response ) =>
    {
        // Todo
    },

    // Background route
    background : async ( request, response ) =>
    {
        let backgroundTables = {};

        const tables = 
        [ 
            ...request.query.visibleTables, 
            ...constants.defaultBackgroundTables
        ];

        const generateSql = tableName =>
        {
            return `SELECT * 
                    FROM ${ tableName } 
                    WHERE object_id = ${ request.query.id }`;
        }

        try
        {
            for( let i = 0; i < tables.length; i++ )
            {
                let tableName = tables[i];
                let sql = generateSql( tableName );

                backgroundTables[tableName] = await all( sql, tableName );
            }

            // To do
            // backgroundTables = helpers.formatBackgroundTables( backgroundTables );
        }
        catch( error )
        {
            response.json( 
            { 
                message: `Error in background response: ${ error }` 
            } )
        }

        response.json( backgroundTables );
    },

    // Display route
    display : async ( request, response ) =>
    {
        const sql = `SELECT display.object_id, 
                            display.case_study, 
                            display.record, 
                            display.thumbnail 
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

    // Visibility routes
    visibility : 
    {
        prompt : async ( request, response ) =>
        {
            const sql = `SELECT * 
                         FROM prompt_visibility 
                         WHERE object_id = ${ request.query.id }`;

            return get( sql, 'prompt visibility' )
                    .then( table => helpers.formatPromptVisibilityTable( table ) )
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
            const sql = `SELECT * 
                         FROM field_visibility 
                         WHERE object_id = ${ request.query.id }`;

            return get( sql, 'field visibility' )
                    .then( table => helpers.formatFieldVisibilityTable( table ) )
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

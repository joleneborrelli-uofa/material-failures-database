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
    // Record route
    record : async ( request, response ) =>
    {
        let recordTables = {};

        const 
        { 
            generateSql,
            formatByHeader 
        } = helpers;

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
            sql = generateSql( 'object' );

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

        const tables = 
        [ 
            ...request.query.visibleTables, 
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

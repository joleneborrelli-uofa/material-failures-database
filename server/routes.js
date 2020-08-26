const db        = require( './db.js' );
const helpers   = require( './helpers.js' );
const constants = require( './constants.js' );


// Make database methods available 
const { all, get, update } = db;

// API routes
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
                let tablename = tables[i];
                let sql = generateSql( tablename, request.query.id );

                recordTables[tablename] = await all( sql, tablename );
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
                let tablename = tables[i];
                let sql = generateSql( tablename, request.query.id );

                caseStudyTables[tablename] = await all( sql, tablename );
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
                        message: `Error in toggle response: ${ error }` 
                    } )
                } )
    },

    // Login route
    login : async ( request, response ) =>
    {
        const username = request.body.username;
        const password = request.body.password;

        const sql = `SELECT *
                     FROM settings
                     WHERE username = '${ username }'`;

        const row = await get( sql, 'login' ); 

        if( row && row.username && row.password )
        {
            const hash = helpers.getPasswordHash( password );

            if( hash === row.password )
            {
                return response.json( { redirectUrl: '/settings' } );
            }
            
            return response.json( { message : 'Incorrect password' } );
        }

        response.json( { message : 'Incorrect username or password' } ); 
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

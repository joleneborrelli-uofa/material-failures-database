const database = require( './db.js' );
const helpers  = require( './helpers.js' );

const routes =
{
    display : async ( request, response ) =>
    {
        const sql = `SELECT display.object_id, 
                            display.case_study, 
                            display.record, 
                            display.thumbnail 
                     FROM display`;

        return new Promise( function ( resolve, reject )
        {
            database.get( sql, function ( error, result ) 
            {
                if ( error ) 
                {
                    console.log( 'Error in get from display table', error )

                    reject( error )
                } 
                else 
                {
                    resolve( result )
                }
            } )
        } )
        .then( table =>
        {
            response.json( table );
        } )
        .catch( error => 
        {
            res.json( { message: `Error in display table response: ${ error }` } )
        } )
    },

    visibility :
    {
        prompt : async ( request, response ) =>
        {
            const sql = `SELECT * 
                         FROM prompt_visibility 
                         WHERE object_id = ${ request.id }`;

            return new Promise( function ( resolve, reject )
            {
                database.get( sql, function ( error, result ) 
                {
                    if ( error ) 
                    {
                        console.log( 'Error in get from prompt visibility table', error )

                        reject( error )
                    } 
                    else 
                    {
                        resolve( result )
                    }
                } )
            } )
            .then( table =>
            {
                helpers.formatPromptVisibilityTable( table );
            } )
            .then( table =>
            {
                response.json( table );
            } )
            .catch( error => 
            {
                res.json( { message: `Error in display table response: ${ error }` } )
            } )
        }
    }
}

module.exports = routes;  

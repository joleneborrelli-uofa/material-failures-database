const constants = require( './constants' );

/**
 * Formats the vibility table into an object with keys
 * based on constant headers. Each header contains 
 * key-value pairs given by the table name (without its
 * prefix of header + _) and its value.
 * 
 * ie.
 * response =   
 * {
 *		object : 
 *		{
 *			rating : 'on',
 *			...
 *		}	
 * }
 *
 * @param  { Object Literal } table    visibility table
 * @return { Object Literal } response formatted table
 */
exports.formatPromptVisibilityTable = table =>
{
    const { headers }   = constants;
    const response      = {};
    const allTableNames = Object.keys( table );

    headers.forEach( header =>
    {
        let selectTableNames = allTableNames.filter( tableName => tableName.includes( header ) );

        if( selectTableNames.length > 0 )
        {
            response[header] = {};

            selectTableNames.forEach( tableName =>
            {
                let parts = tableName.split( '_' );
                let field = parts[1];

                response[header][field] = table[tableName];
            } )
        }

    } )

    return response;
};

/**
 * Deletes all the table names that have their 
 * visibility set to be not visible
 *
 * @param  { Object Literal } table    visibility table
 * @return { Object Literal } response formatted table
 */
exports.formatFieldVisibilityTable = table =>
{
    const response = { ...table };

    for ( let column in response )
    {
        if( response[column] === constants.visibility.off ||
            constants.columnsToDelete.includes( column ) )
        {
            delete response[column]
        }
    }

    return Object.keys( response );
};

/**
 * Formats the background tables according to header
 *
 * @param  { Object Literal } table    background table
 * @return { Object Literal } response formatted table
 */
exports.formatBackgroundTables = tables =>
{
    // Todo
};

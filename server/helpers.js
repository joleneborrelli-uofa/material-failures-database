const constants = require( './constants' );
const isArray   = require( 'lodash/fp/isArray' );
const crypto    = require( 'crypto' );


/**
 * Generates a password hash. Author: Janith Kasun 
 *
 * @param  { String } password  password
 * @return { String } hash      password hash
 */
const getPasswordHash = password => 
{
    const sha256 = crypto.createHash( 'sha256' );
    const hash   = sha256.update( password ).digest( 'base64' );
    
    return hash;
};

/**
 * Generates an SQL string 
 *
 * @param  { String } tablename name of the table
 * @param  { String } id        object id
 * @return { String } sql 
 */
const generateSql = ( tablename, id ) =>
{
    return `SELECT * 
            FROM ${ tablename } 
            WHERE object_id = ${ id }`;
};

/**
 * Formats the vibility table into an object with keys
 * based on constant headers. Each header contains 
 * key-value pairs where the key is the table name (without 
 * the prefix header + _) and the value is an array of
 * rows. The rows are either populated with objects or
 * strings. 
 * 
 * ie.
 * response =   
 * {
 *		object : 
 *		{
 *			feature : [ {...}, {...} ],
 *          rating  : [ '...', '...']
 *			...
 *		}	
 * }
 *
 * @param  { Object Literal } table    has table names as keys
 * @return { Object Literal } response formatted table
 */
const formatByHeader = table =>
{
    const { headers }   = constants;
    const response      = {};
    const allTablenames = Object.keys( table );

    headers.forEach( header =>
    {
        // Select all tables that contain the header
        let selectTablenames = allTablenames.filter( tablename => 
                                    tablename.includes( header ) );

        // If there are tables that contain the header
        if( selectTablenames.length > 0 )
        {
            response[header] = {};

            selectTablenames.forEach( tablename =>
            {
                let rows = table[tablename];

                // If the table has entries ie. is not empty
                if( isArray( rows ) && rows.length > 0 )
                {
                    // Format the rows
                    try
                    {
                        rows = formatByRow( rows );
                    }
                    catch( error )
                    {
                        console.error( error );
                    }

                    // Remove the header prefix and take substring after _.
                    let field = tablename.replace( header, '' ).substring( 1 );

                    // If it is a table with a header prefix
                    if( field )
                    {
                        // Assigns all rows to an field
                        response[header][field] = rows; 
                    }
                    // If it is a top-level header
                    else
                    {
                        // Store the rows at header level
                        return response[header] = rows;
                    }
                }

            }, {} );

            // If nothing has been added under the header,
            // delete the header in the response object
            if( !Object.keys( response[header] ).length > 0 )
            {
                delete response[header];
            }
        }
    } )

    // Add object_id and name from object table
    if( table.object ) response.object = { ...response.object, ...table.object };

    return response;
};

/**
 * Formats rows such that certain values within the row
 * can be excluded and rows which have only one value
 * left become an array of strings. An error is thrown 
 * if a row has a value that is null or if there are 
 * no keys left in a row after exclusion.
 *
 * TODO: Improve call to database, so that it is not
 * necessary to remove id and object_id
 *
 * @param  { Array } rows     rows of data
 * @return { Array } response formatted row
 */
const formatByRow = rows =>
{
    const 
    { 
        errorMessages,
        excludedColumns 
    } = constants;

    rows.forEach( row =>
    {
        for( let key in row )
        {
            if( excludedColumns.includes( key ) )
            {
                delete row[key];
            }

            // Throw error if the object is empty
            if( !Object.keys( row ).length > 0 )
            {
                throw errorMessages.noFields;
            }
        }
    } )

    // If length of keys in row is 1, return the value
    // of the key, which would be a string, instead of 
    // the row, which would be an object
    return rows.map( row =>
    {
        const key = Object.keys( row );

        if( key.length === 1 )
        {
            return row[key];
        }

        return row
    } )
};

/**
 * Formats the prompt vibility table into an object with 
 * keys based on constant headers. Each header contains 
 * key-value pairs where the key is the table name (without 
 * the prefix header + _) and the value is a string.
 * 
 * ie.
 * response =   
 * {
 *      object : 
 *      {
 *          feature : 'off',
 *          rating  : 'on',
 *          ...
 *      }   
 * }
 *
 * @param  { Object Literal } table    has table names as keys
 * @return { Object Literal } response formatted table
 */
const formatByPromptVisibility = table =>
{
    const 
    { 
        headers,
        excludedColumns 
    } = constants;

    const response      = {};
    const allTablenames = Object.keys( table );

    headers.forEach( header =>
    {
        // Select all tables that have contain the header
        let selectTablenames = allTablenames.filter( tablename => 
                                    tablename.includes( header ) );

        // If there are tables that contain the header
        if( selectTablenames.length > 0 )
        {
            response[header] = {};

            // Loop over each selected table
            selectTablenames.forEach( tablename =>
            {
                // Remove the header prefix and take the substring after _
                let field = tablename.replace( header, '' ).substring( 1 );

                if( field && !excludedColumns.includes( field ) )
                {
                    response[header][field] = table[tablename]; 
                }
            } )
        }
    } )

    return response;
};

/**
 * Deletes all the table names that have their 
 * value set to visibility off
 *
 * @param  { Object Literal } table    visibility table
 * @return { Object Literal } response formatted table
 */
const formatByValueVisibility = table =>
{
    const { excludedColumns } = constants;
    const response            = { ...table };

    for ( let column in response )
    {
        if( response[column] === constants.visibility.off ||
            excludedColumns.includes( column ) )
        {
            delete response[column];
        }
    }

    return Object.keys( response );
};


exports.generateSql              = generateSql;
exports.formatByHeader           = formatByHeader;
exports.formatByPromptVisibility = formatByPromptVisibility;
exports.formatByValueVisibility  = formatByValueVisibility;
exports.getPasswordHash          = getPasswordHash;

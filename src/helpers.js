import { optionChanges }                 from './constants/optionChanges.constants.js';
import { headers, unknownObject, lines } from './constants/webDisplay.constants.js';

/**
 * Tests if the paramater is a string
 *
 * @param  { Any } val value to test
 * @return { Boolean } 
 */
export const isString = ( val ) => typeof val === 'string';

/**
 * Tests if the paramater is an array
 *
 * @param  { Any } val value to test
 * @return { Boolean } 
 */
export const isArray  = ( val ) => Array.isArray( val );

/**
 * Tests if the paramater is an object literal
 *
 * @param  { Any } val value to test
 * @return { Boolean } 
 */
export const isObject = ( val ) => val && typeof val === 'object' && val.constructor === Object;

/**
 * Gets the object name from the database
 *
 * @param  { Object Literal } database database
 * @return { String } 
 */
export const getObjectName = ( database ) =>
{
	return database.hasOwnProperty( 'object' ) ? database.object.name : unknownObject;
};

/**
 * Gets the object case number from the database
 *
 * @param  { Object Literal } database database
 * @return { String } 
 */
export const getObjectCaseNumber = ( database ) =>
{
	return database.hasOwnProperty( 'object' ) ? database.object.id : '0';
};

/**
 * Generates a unique id for React components
 *
 * @param  { String } prefix prefix for the key
 * @return { String } 
 */
export const createUniqueId = prefix => 
{
    return `${ prefix }-${ new Date().getTime() }`;
};

/**
 * Extract the prefix from a string with a '_' character
 *
 * @param  { String } value string with '_' character
 * @return { String } 
 */
export const extractPrefix = value =>
{
    return value.split( '-' )[0];
};

/**
 * Selects the headers to display
 *
 * @param  { Object Literal } database database
 * @return { Object Literal } 
 */
export const buildHeaders = ( database ) =>
{
    let displayHeaders = { ...headers };

	const databaseKeys = Object.keys( database );

    for( let key in displayHeaders )
    {
        if( !databaseKeys.includes( key ) ) delete displayHeaders[key]
    }

    return displayHeaders;
};

/**
 * Gets the additional prompts from the database
 * object, organized per header
 *
 * @param  { Object Literal } database database
 * @return { Object Literal } 
 */
export const getAdditionalPrompts = database =>
{
    const prompts = {};

    for( let header in headers )
    {
        let additionalPrompt = [];

        if( database[header] && database[header].additional_prompt )
        {
            additionalPrompt = database[header].additional_prompt;
        }
        
        prompts[header] = additionalPrompt;
    }

    return prompts;
};

/**
 * Converts the state into a formatted string
 *
 * @param  { Object Literal } state PromptCaseStudy state
 * @return { String } 
 */
export const convertStateIntoText = state =>
{
    const { checkbox, radio } = optionChanges;

    let text = '';

    for( let statekey in state )
    {
        let statevalue = state[statekey];

        if( isString( statevalue ) && statevalue )
        {
            let string = '';

            const parts     = statekey.split( '_' );
            const lastIndex = parts.length-1;

            string = `${ lines[statekey] }: ${ statevalue } \n`;

            if( parts[lastIndex] === 'note' ) string = `Notes: ${ statevalue } \n`;

            text += string;
        }

        if( statevalue.constructor === Map )
        {
            if( checkbox.includes( statekey ) )
            {
                let checked = [];

                statevalue.forEach( ( bool, option ) => bool ? checked.push( option ) : false );

                if( checked.length > 0 )
                {
                    text += `${ lines[statekey] }: ${ checked.join(', ') } \n`;
                }
            }

            if( radio.includes( statekey ) )
            {
                let string = '';

                const mapvalues = Array.from( statevalue.values() );

                mapvalues.forEach( mapvalue =>
                {
                    let keys = Object.keys( mapvalue );

                    // !! DO THIS BETTER !! 
                    // assuming there are only two keys per mapvalue
                    if( mapvalue[keys[0]] && mapvalue[keys[1]] ) 
                    {
                        string += `${ mapvalue[keys[0]] }: ${ mapvalue[keys[1]] } \n`;
                    }
                } );

                if( string ) text += `${ lines[statekey] } \n${ string }`;
            }

            if( statekey === 'additionalPromptText' )
            {
                let string = '';

                statevalue.forEach( ( note, moduleName ) => 
                {
                    if( note ) string += `${ headers[moduleName] }: ${ note } \n`;
                } ); 

                if( string ) text += 'Module Notes: \n' + string;
            }
        }
    }
    
    return text;
};


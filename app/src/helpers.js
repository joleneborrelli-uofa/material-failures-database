import { optionChanges }                     from './constants/optionChanges.constants.js';
import { headers, unknownObject, subheaders } from './constants/webDisplay.constants.js';
import { random, isString }                  from 'lodash';

/**
 * Generates a unique id for React components
 *
 * @param  { String } prefix prefix for the key
 * @return { String } 
 */
export const createUniqueId = () => 
{
    const randomNumber = random( 0, 1000000 );

    return `${ randomNumber }-${ new Date().getTime() }`;
};

/**
 * Extract the prefix from a string with a '_' character
 *
 * @param  { String } value string with '_' character
 * @return { String } 
 */
export const extractPrefix = value =>
{
    return value.split( '-' ).shift();
};

/**
 * Capitalizes a string
 *
 * @param  { String } value string
 * @return { String } 
 */
export const capitalize = value =>
{
    return value.charAt( 0 ).toUpperCase() + value.slice( 1 ); 
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
 * Gets the additional prompts from the fields
 * object, organized per header
 *
 * @param  { Object Literal } fields fields
 * @return { Object Literal } 
 */
export const getAdditionalPrompts = fields =>
{
    const prompts = {};

    for( let header in headers )
    {
        let additionalPrompt = [];

        if( fields[header] && fields[header].additional_prompt )
        {
            additionalPrompt = fields[header].additional_prompt;
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
export const convertStateToText = state =>
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

            string = `${ subheaders[statekey] }: ${ statevalue } \n`;

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
                    text += `${ subheaders[statekey] }: ${ checked.join(', ') } \n`;
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

                if( string ) text += `${ subheaders[statekey] } \n${ string }`;
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

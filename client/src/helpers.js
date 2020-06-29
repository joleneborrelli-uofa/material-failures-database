import { headers, subheaders } from './constants/webDisplay.constants.js';
import { random, isString }    from 'lodash';

/**
 * Returns a boolean value of weather or not there is record data
 * under other headers
 *
 * @param  { Object Literal } recordData record data
 * @return { Boolean } 
 */
export const hasRecordData = recordData =>
{
    const keys = Object.keys( recordData );

    return keys.some( key => ['use', 'environment', 'processing', 'material'].includes( key ) );
};

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
 * @param  { DOM Tree } form  form elements
 * @return { String } 
 */
export const convertFormToText = form =>
{
    let text = '';

    for( let i = 0; i < form.length; i++ )
    {
        let name    = '';
        let element = form[i];
        let { type, checked, value } = element;

        if( ( type === 'radio' || type === 'checkbox' ) && checked )
        {
            let toAppend = '';

            name = extractPrefix( element.name );

            ['subtype', 'force', 'normalcy'].forEach( suffix =>
            {
                if( name.includes( suffix ) )
                {
                    name = name.replace( '_' + suffix, '' );

                    toAppend = ` ${ capitalize( suffix ) }`;
                }
            } );

            name = `${ subheaders[name] }${ toAppend }`;

        } 

        if( type === 'textarea' && value )
        {
            name = element.name;

            if( name.includes( '_note' ) )
            {
                name = name.replace( '_note', '' );

                name = subheaders[name] + ' Notes'
            }
            else if( name.includes( '_additional_prompt' ) )
            {
                name = name.replace( '_additional_prompt', ' Additional Notes' );
            }
            else
            {
                name = subheaders[name];
            }
        }

        if( name )
        {
            text += `${ capitalize( name ) }: ${ value } \n \n`;
        }

    };
    
    return text;
};

import { displayHeaders, unknownObject } from './constants.js';

/** 
    @function isString

    @arg val : { Any }
    @return  : { Boolean } 
*/ 
export const isString = ( val ) => typeof val === 'string';

/** 
    @function isArray

    @arg val : { Any }
    @return  : { Boolean } 
*/ 
export const isArray  = ( val ) => Array.isArray( val );

/** 
    @function isObject

    @arg val : { Any }
    @return  : { Boolean } 
*/ 
export const isObject = ( val ) => val && typeof val === 'object' && val.constructor === Object;

/** 
    @function getObjectName

    @arg database : { Object Literal }
    @return       : { String } 
*/ 
export const getObjectName( database )    
{
	return database.hasOwnProperty( 'object' ) ) ? database.object.name : unknownObject;
};

/** 
    @function getObjectCaseNumber

    @arg database : { Object Literal }
    @return       : { String } 
*/ 
export const getObjectCaseNumber( database )
{
	return database.hasOwnProperty( 'object' ) ) ? database.object.id : '0';
};

/**
    @function buildHeaders
    
    @arg database : { Object } 
    @return       : { Object }     
*/
export const buildHeaders = ( database ) =>
{
    let headers = { ...displayHeaders };

	const databaseKeys = Object.keys( database );

    for( let key in headers )
    {
        if( !databaseKeys.includes( key ) ) delete headers[key]
    }

    return headers;
};
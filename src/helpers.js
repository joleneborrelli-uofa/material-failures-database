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
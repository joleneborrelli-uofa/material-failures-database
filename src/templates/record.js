import { htmlClass, displayLines, databaseKeys } from '../constants.js';
import { isString, isArray, isObject }           from '../helpers.js';
import { database }                              from '../database/record.js';

export function generateRecordHtml ( headers, title )
{ 
    let innerHtml = `<h3 class="${ htmlClass.title }">${ title }</h3>`;

    for( let header in headers )
    {
        let module = database.object[header];

        innerHtml += generateModuleHtml( module, header );
    }

    return innerHtml;
};

/** 
    @function generateModuleHtml

    @arg module : { Object }
    @arg header : { String }
    @return     : { String } 
*/ 
const generateModuleHtml = ( module, header ) =>
{
    const innerHtml = generateInnerHtml( module, header );

    return `<div class="${ htmlClass.module }">
                <div class="${ htmlClass.moduleHeader }">${ header }</div>
                <div class="${ htmlClass.submodule }">${ innerHtml }</div>
            </div>`;
};

/** 
    @function generateSubmoduleHtml

    @arg subheader : { String }
    @return        : { String } 
*/ 
const generateSubmoduleHtml = ( subHeader ) =>
    `<p class="${ htmlClass.submoduleHeader }">${ subHeader }</p>`

/**
    @function generateTypeLineHtml

    @arg type        : { String }
    @arg subtype     : { String }
    @arg description : { String }
    @return          : { String } 

    ie. 'Molding (Compression) : The item was compressed at high heat'
*/ 
const generateTypeLineHtml = ( type, subtype, description ) =>
{
    // If there is no subtype, do not include it in the line
    subtype = subtype ? ` (${ subtype })` : '';

    return `<p class="${ htmlClass.line }">
                ${ type }${ subtype }: ${ description }
            </p>`
};

/**
    @function generateSingleLineHtml

    @arg description : { String }
    @return          : { String } 
*/ 
const generateSingleLineHtml = ( description ) =>
    `<p class="${ htmlClass.line }">${ description }</p>`

/**
    @function generateMultipleLineHtml

    @arg lines : { Array }
    @return    : { String } 
*/ 
const generateMultipleLineHtml = ( lines ) =>
{
    let li = ``;

    for( let i = 0; i < lines.length; i++ )
    {
        li += `<li class="${ htmlClass.liLines }">${ lines[i] }</li>`
    }

    return `<ul class="${ htmlClass.ulLines }">${ li }</ul>`;
};

/**
    DO THIS BETTER
    @function generateInnerTypeLineHtml

    @arg subHeader : { String }
    @arg modVal    : { Array }
    @return        : { String } 
*/ 
const generateInnerTypeLineHtml = ( subHeader, modVal ) =>
{
    let innerHtml = ``;

    for( let i = 0; i < modVal.length; i ++ )
    {
        let keys = Object.keys( modVal[i] );

        let typeKey        = subHeader + databaseKeys.type;
        let descriptionKey = subHeader + databaseKeys.description;
        let subtypeKeys    = 
        [
            modVal[i][subHeader + databaseKeys.subtype],
            modVal[i][subHeader + databaseKeys.normalcy],
            modVal[i][subHeader + databaseKeys.forces],
            modVal[i][subHeader + databaseKeys.frequency]
        ].filter( subtypeKey => subtypeKey !== undefined );

        let type        = keys.includes( typeKey ) ? modVal[i][typeKey] : '';
        let subtype     = subtypeKeys.length !== 0 ? subtypeKeys.join( ', ' ) : '';
        let description = keys.includes( descriptionKey ) ? modVal[i][descriptionKey] : '';
        
        innerHtml += generateTypeLineHtml( type, subtype, description );
    }

    return innerHtml;
};

/** 
    @function generateInnerHtml

    @arg module : { Object }
    @arg header : { String }
    @return     : { String } 
*/ 
const generateInnerHtml = ( module, header ) =>
{   
    let innerHtml = ``;

    for( let key in module )
    {
        let singleLine   = ``;
        let typeLine     = ``;
        let multipleLine = ``;

        const subHeader     = displayLines[header][key];
        const modVal        = module[key];
        const submoduleHtml = generateSubmoduleHtml( subHeader );

        if ( isString( modVal ) ) 
        {
            singleLine = generateSingleLineHtml( modVal );
        }

        if( isArray( modVal ) )
        {
            if( isString( modVal[0] ) ) 
            {
                multipleLine = generateMultipleLineHtml( modVal );
            }

            if( isObject( modVal[0] ) )
            {
                typeLine = generateInnerTypeLineHtml( key, modVal );
            }
        }

        innerHtml += submoduleHtml + singleLine + multipleLine + typeLine;
    }

    return innerHtml;
};
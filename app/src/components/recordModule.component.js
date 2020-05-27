import React               from 'react';
import ReferenceList       from './referenceList.component.js';
import Viewer              from './viewer.component.js';
import { recordHtmlClass } from '../constants/htmlClass.constants.js';
import { subheaders }      from '../constants/webDisplay.constants.js'; 
import { databaseKeys }    from '../constants/database.constants.js';
import 
{ 
    isString, 
    isArray, 
    isPlainObject 
} from 'lodash';

import 
{ 
    buildHeaders, 
    createUniqueId
} from '../helpers.js';

export default function RecordModule ( props )
{
    /**
     * Generates the modules given the headers that
     * will be present
     *
     * @param  { Object Literal } recordData record data
     * @return { String }         modules    record modules
     */
    const generateModules = recordData =>
    {
        let modules   = [];
        const headers = buildHeaders( recordData );

        for( let header in headers )
        {
            let submoduleData = recordData[header];
            let submodule     = generateSubmodules( submoduleData );

            if( submodule.length > 0 )
            {
                modules.push( <div 
                                key={ createUniqueId() }
                                className={ recordHtmlClass.module }>
                                    <div className={ recordHtmlClass.moduleHeader }>
                                        { header }
                                    </div>
                                    <div className={ recordHtmlClass.submodule }>
                                        { submodule }
                                    </div>
                              </div> );
            }

        }

        return modules;
    }

    /**
     * Generates the submodules for each header, creating
     * a single line, list or formatted single line
     *
     * @param  { Object Literal } submoduleData value of subheader
     * @return { String }         submodules    record submodules
     */
    const generateSubmodules = submoduleData =>
    {
        let submodules = [];

        for( let key in submoduleData )
        {
            const value     = submoduleData[key];
            const subheader = subheaders[key];

            if( subheader )
            {
                // Subheader
                submodules.push( <p 
                                  key={ createUniqueId() }
                                  className={ recordHtmlClass.submoduleHeader }>
                                    { subheader }
                                 </p> )

                if( isArray( value ) )
                {
                    const hasStrings = value.every( item => isString( item ) );
                    const hasObjects = value.every( item => isPlainObject( item ) );

                    if( hasStrings ) 
                    {
                        if( value.length > 1 ) 
                        {
                            submodules.push( generateMultipleLines( value ) );
                        }
                        else
                        {
                            submodules.push( generateSingleLine( value[0] ) );
                        }
                    }

                    if( hasObjects )
                    {
                        submodules.push( generateFormattedLines( value, key ) )
                    }
                }
            }
        }

        return submodules;
    }

    /**
     * Generates a single line
     *
     * @param  { String } value 
     * @return { Markup } line
     */
    const generateSingleLine = value =>
    {
        return <p 
                  key={ createUniqueId() }
                  className={ recordHtmlClass.line }>
                    { value }
                 </p>;
    }
                  
    /**
     * Generates multiple lines in a list
     *
     * @param  { Object Literal } value value of subheader
     * @return { Markup }         list
     */
    const generateMultipleLines = ( value ) =>
    {
        let li = [];

        for( let i = 0; i < value.length; i++ )
        {
            li.push( <li 
                        key={ i }
                        className={ recordHtmlClass.liLines }>
                        { value[i] }
                    </li> )
        }

        return <ul 
                key={ createUniqueId () }
                className={ recordHtmlClass.ulLines }>
                    { li }
                </ul>;   
    }

    /**
     * !!DO THIS BETTER!!
     *
     * Generates multiple formatted strings
     *
     * @param  { Array }  value             value of subheader 
     * @param  { String } subheader         module subheader
     * @return { Array }  formatted strings
     */
    const generateFormattedLines = ( value, subheader ) =>
    {
        let strings = [];

        for( let i = 0; i < value.length; i ++ )
        {
            let keys = Object.keys( value[i] );

            let typeKey        = subheader + databaseKeys.type;
            let descriptionKey = subheader + databaseKeys.description;
            let subtypeKeys    = 
            [
                value[i][subheader + databaseKeys.subtype],
                value[i][subheader + databaseKeys.normalcy],
                value[i][subheader + databaseKeys.forces],
                value[i][subheader + databaseKeys.frequency]
            ].filter( subtypeKey => subtypeKey !== undefined );

            let type        = keys.includes( typeKey ) ? value[i][typeKey] : '';
            let subtype     = subtypeKeys.length !== 0 ? subtypeKeys.join( ', ' ) : '';
            let description = keys.includes( descriptionKey ) ? value[i][descriptionKey] : '';
            
            strings.push( generateFormattedLine( type, subtype, description ) );
        }

        return strings;
    }

    /**
     * Generates a formatted string
     *
     * @param  { String } type             data type
     * @param  { String } subtype          data subtype
     * @param  { String } description      data description
     * @return { Markup } formatted string
     */
    const generateFormattedLine = ( type, subtype, description ) =>
    {
        // If there is no subtype, do not include it in the line
        subtype = subtype ? ` (${ subtype })` : '';

        return <p 
                key={ createUniqueId( type ) }
                className={ recordHtmlClass.line }>
                    { type }{ subtype }: { description }
                </p>
    }

    const 
    { 
        recordData,
        showViewer = true
    } = props;

    const 
    {
        manifest,
        reference
    } = recordData;

    const title   = recordData.object && recordData.object.object_id;
    const modules = generateModules( recordData );

    const referenceList = reference ? <ReferenceList list={ reference } /> : false;
    const viewers       = showViewer && manifest ? manifest.map( ( item, index ) =>
    {
        return <Viewer key={ index } path={ item.path } />
    } ) : false;

    return(
        <div className={ recordHtmlClass.record }>

            <h3 className={ recordHtmlClass.title }>
                { title }
            </h3>
            { modules }
            { referenceList }
            { viewers }

        </div>
    )

}

import React               from 'react';
import Conclusion          from './conclusion.component.js';
import ReferenceList       from './referenceList.component.js';
import Viewer              from './viewer.component.js';
import FaultTree           from './faultTree.component.js';
import { recordHtmlClass } from '../constants/htmlClass.constants.js';
import { subheaders }      from '../constants/webDisplay.constants.js'; 
import 
{ 
    isString, 
    isArray, 
    isPlainObject 
} from 'lodash';

import 
{ 
    capitalize,
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
                        submodules.push( generateFormattedLines( value ) )
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
                    { capitalize( value ) }
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
                        { capitalize( value[i] ) }
                    </li> )
        }

        return <ul 
                key={ createUniqueId () }
                className={ recordHtmlClass.ulLines }>
                    { li }
                </ul>;   
    }

    /**
     * Generates multiple formatted strings
     *
     * @param  { Array }  value value of subheader 
     * @return { Array }        formatted strings
     */
    const generateFormattedLines = ( value ) =>
    {
        let strings = [];

        for( let i = 0; i < value.length; i ++ )
        {
            let keys = Object.keys( value[i] );

            let typekey        = keys.find( key => key.includes( 'type' ) );
            let descriptionkey = keys.find( key => key.includes( 'description' ) );
            let subtypekey     = keys.filter( key => key !== typekey && key !== descriptionkey );

            let type        = value[i][typekey];
            let description = value[i][descriptionkey];
            let subtypes    = subtypekey.map( key => ( { key, 'value' : value[i][key] } ) );
            
            strings.push( generateFormattedLine( type, subtypes, description ) );
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
    const generateFormattedLine = ( type = '', subtypes = [], description = '' ) =>
    {
        let subtype = '';

        subtypes.forEach( ( item, index, array ) =>
        {
            let length = array.length;
            let key    = item.key.split( '_' ).pop();
               
            subtype += `${ capitalize( key ) }: ${ capitalize( item.value ) }`;

            if( length !== 1 && index !== length - 1 ) subtype = `${ subtype }, `;
        } );

        if( subtype )
        {
            subtype = ` (${ subtype })`;
        }

        // If there is no description, do not include it or the colon
        if( description )
        {
            description = ` - ${ capitalize( description ) }`;
        }

        return <p 
                key={ createUniqueId( type ) }
                className={ recordHtmlClass.line }>
                    { capitalize( type ) }{ subtype }{ description }
                </p>
    }

    const 
    { 
        recordData,
        showViewer = true
    } = props;

    const 
    {
        fault_tree,
        conclusion,
        manifest,
        reference
    } = recordData;

    const title            = recordData.object && recordData.object.name;
    const modules          = generateModules( recordData );
    const conclusionModule = conclusion ? <Conclusion sections={ conclusion[0] } /> : false;
    const faultTreeImg     = fault_tree ? <FaultTree path={ fault_tree } /> : false;
    const referenceList    = reference ? <ReferenceList list={ reference } /> : false;
    const viewers          = showViewer && manifest ? manifest.filter( item => item.page === 'record' )
                                           .map( ( item, index ) => <Viewer key={ index } path={ item.path } /> ) : false;

    return(
        <div className={ recordHtmlClass.record }>

            <h3 className={ recordHtmlClass.title }>
                { title }
            </h3>

            { modules }
            { viewers }
            { faultTreeImg }
            { conclusionModule }
            { referenceList }

        </div>
    )

}

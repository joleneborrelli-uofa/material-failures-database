import React               from 'react';
import { recordHtmlClass } from '../constants/htmlClass.constants.js';
import { lines }           from '../constants/webDisplay.constants.js'; 
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
    getObjectName ,
    createUniqueId
} from '../helpers.js';

export default class RecordModule extends React.Component
{
    constructor( props )
    {
        super( props );

        this.generateModules       = this.generateModules.bind( this );
        this.generateSubmodules    = this.generateSubmodules.bind( this );
        this.generateMultipleLines = this.generateMultipleLines.bind( this );
        this.generateTypeLines     = this.generateTypeLines.bind( this );
        this.generateTypeLine      = this.generateTypeLine.bind( this );
    }

    /**
     * Generates the modules given the headers that
     * will be present
     *
     * @param  { Object Literal } database record database
     * @return { String }         modules  record modules
     */
    generateModules( database )
    {
        let modules   = [];
        const headers = buildHeaders( database );

        for( let header in headers )
        {
            let moduleData = database[header];
            let submodule  = this.generateSubmodules( moduleData );

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
     * @param  { Object Literal } moduleData data specific to the submodule
     * @return { String }         submodules record submodules
     */
	generateSubmodules( moduleData )
	{
        let submodules = [];

        for( let key in moduleData )
        {
            let singleLine   = '';
            let typeLine     = '';
            let multipleLine = '';

            const moduleValue = moduleData[key];
            const lineHeader  = lines[key];

            if( lineHeader )
            {
                const submoduleHeader = <p 
                                         key={ createUniqueId() }
                                         className={ recordHtmlClass.submoduleHeader }>
                                            { lineHeader }
                                        </p>;

                if ( isString( moduleValue ) ) 
                {
                    singleLine = <p 
                                  key={ createUniqueId() }
                                  className={ recordHtmlClass.line }>
                                    { moduleValue }
                                 </p>;
                }

                if( isArray( moduleValue ) )
                {
                    if( isString( moduleValue[0] ) ) 
                    {
                        multipleLine = this.generateMultipleLines( moduleValue );
                    }

                    if( isPlainObject( moduleValue[0] ) )
                    {
                        typeLine = this.generateTypeLines( moduleValue, key );
                    }
                }

                submodules.push( submoduleHeader, singleLine, multipleLine, typeLine );
            }
            
        }

        return submodules;
	}

    /**
     * Generates multiple lines in a list
     *
     * @param  { Object Literal } moduleData data specific to the submodule
     * @return { String }                    list
     */
    generateMultipleLines( moduleValue )
    {
        let li = [];

        for( let i = 0; i < moduleValue.length; i++ )
        {
            li.push( <li 
                        key={ i }
                        className={ recordHtmlClass.liLines }>
                        { moduleValue[i] }
                    </li> )
        }

        return <ul className={ recordHtmlClass.ulLines }>
                    { li }
                </ul>;   
    }

    /**
     * !!DO THIS BETTER!!
     *
     * Generates multiple type lines, which are formatted
     * strings
     *
     * @param  { Array }  moduleData data specific to the submodule entry
     * @param  { String } subheader  module subheader
     * @return { String } typelines  formatted strings
     */
    generateTypeLines( moduleValue, subheader )
    {
        let typeLines = [];

        for( let i = 0; i < moduleValue.length; i ++ )
        {
            let keys = Object.keys( moduleValue[i] );

            let typeKey        = subheader + databaseKeys.type;
            let descriptionKey = subheader + databaseKeys.description;
            let subtypeKeys    = 
            [
                moduleValue[i][subheader + databaseKeys.subtype],
                moduleValue[i][subheader + databaseKeys.normalcy],
                moduleValue[i][subheader + databaseKeys.forces],
                moduleValue[i][subheader + databaseKeys.frequency]
            ].filter( subtypeKey => subtypeKey !== undefined );

            let type        = keys.includes( typeKey ) ? moduleValue[i][typeKey] : '';
            let subtype     = subtypeKeys.length !== 0 ? subtypeKeys.join( ', ' ) : '';
            let description = keys.includes( descriptionKey ) ? moduleValue[i][descriptionKey] : '';
            
            typeLines.push( this.generateTypeLine( type, subtype, description ) );
        }

        return typeLines;
    };

    /**
     * Generates a type line, which is a formatted
     * string
     *
     * @param  { String } type        data type
     * @param  { String } subtype     data subtype
     * @param  { String } description data description
     * @return { String } typeline    formatted string
     */
    generateTypeLine( type, subtype, description )
    {
        // If there is no subtype, do not include it in the line
        subtype = subtype ? ` (${ subtype })` : '';

        return <p 
                key={ createUniqueId( type ) }
                className={ recordHtmlClass.line }>
                    { type }{ subtype }: { description }
                </p>
    };

    render()
    {
        const { database } = this.props;

        const title   = getObjectName( database );
        const modules = this.generateModules( database );

        return(
        	<div className={ recordHtmlClass.record }>
        		<h3 className={ recordHtmlClass.title }>
        			{ title }
        		</h3>
        		{ modules }
        	</div>
        )
    }

};

import axios                             from 'axios';
import React, { useEffect, useState }    from 'react';
import { genericHtmlClass as htmlClass } from '../constants/htmlClass.constants.js';
import CaseStudyModule                   from './caseStudyModule.component.js';

export default function CaseStudyModuleAPI ( props )
{
    // Props
    const { id } = props;

    // State
    const [loading, setLoading]                 = useState( 'on' );
    const [caseStudyModule, setCaseStudyModule] = useState( [] ) ;

    useEffect( () =>
    {
        fetchCaseStudyModuleData();
    }, [] );

    // Methods
    const fetchPromptVisibility = async () =>
    {
        return axios
                .get( 'http://localhost:4001/api/visibility/prompt', 
                { 
                    params: { id } 
                } )
                .then( res => res.data )
                .catch( err => 
                {
                    console.error( `Error getting prompt visibility: ${ err }` ) 
                } )    	
    }

    const fetchFields = async () =>
    {
        let visibleTables = await axios
                                .get( 'http://localhost:4001/api/visibility/field',
                                { 
                                    params: { id } 
                                } )
                                .then( res => res.data )
                                .catch( err => 
                                {
                                    console.error( `Error getting field visibility: ${ err }` ) 
                                } )

        return axios 
                .get( 'http://localhost:4001/api/background',
                { 
                    params: { id, visibleTables } 
                } ) 
                .then( res => res.data )
                .catch( err => 
                {
                    console.error( `Error getting background fields: ${ err }` ) 
                } )
    }

    const fetchCaseStudyModuleData = async () => 
    {
        let visibility = await fetchPromptVisibility();
        let fields     = await fetchFields();

        let caseStudyModule = <CaseStudyModule
                                    visibility={ visibility }
                                    fields={ fields } />

        setCaseStudyModule( caseStudyModule );
        setLoading( false );
    }

    // Return
    const loadingClass = `${ htmlClass.visibility[loading] } ${ htmlClass.loading }`;

    return (
        <div>
            <p className={ loadingClass }>Loading. Please wait...</p>
                { caseStudyModule }
        </div>
    );

}

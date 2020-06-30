import axios                             from 'axios';
import React, { useEffect, useState }    from 'react';
import { genericHtmlClass as htmlClass } from '../constants/htmlClass.constants.js';
import CaseStudy                         from './CaseStudy.component.js';

export default function CaseStudyApi ( props )
{
    // Props
    const { id } = props;

    // State
    const [loading, setLoading]       = useState( 'on' );
    const [visibility, setVisibility] = useState( {} );
    const [studyData, setStudyData]   = useState( {} );

    useEffect( () =>
    {
        fetchCaseStudyData();
    }, [] );

    // Methods
    const fetchPromptVisibility = async () =>
    {
        return axios
                .get( '/api/visibility/prompt', 
                { 
                    params: { id } 
                } )
                .then( res => res.data )
                .catch( err => 
                {
                    console.error( `Error getting prompt visibility: ${ err }` ) 
                } )    	
    }

    const fetchStudyData = async () =>
    {
        let visibleTables = await axios
                                .get( '/api/visibility/field',
                                { 
                                    params: { id } 
                                } )
                                .then( res => res.data )
                                .catch( err => 
                                {
                                    console.error( `Error getting field visibility: ${ err }` ) 
                                } )

        return axios 
                .get( '/api/study',
                { 
                    params: { id, visibleTables } 
                } ) 
                .then( res => res.data )
                .catch( err => 
                {
                    console.error( `Error getting case study fields: ${ err }` ) 
                } )
    }

    const fetchCaseStudyData = async () => 
    {
        let visibility = await fetchPromptVisibility();
        let studyData  = await fetchStudyData();

        setVisibility( visibility );
        setStudyData( studyData );
        setLoading( 'off' );
    }

    // Return
    const loadingClass = `${ htmlClass.visibility[loading] } ${ htmlClass.loading }`;
    const caseStudyElement = Object.keys( visibility ).length && Object.keys( studyData ).length ?
                            ( <CaseStudy 
                                visibility={ visibility } 
                                studyData={ studyData } /> ) : false;

    return (
        <div>
            <p className={ loadingClass }>Loading. Please wait...</p>
                { caseStudyElement }
        </div>
    );

}

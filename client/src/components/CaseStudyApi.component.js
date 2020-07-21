import axios                             from 'axios';
import React, { useEffect, useState }    from 'react';
import { genericHtmlClass as htmlClass } from '../constants/htmlClass.constants.js';
import CaseStudy                         from './CaseStudy.component.js';

export default function CaseStudyApi ( props )
{
    // Props
    const { id } = props;

    // State
    const [caseStudyData, setCaseStudyData] = useState( {} );

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

        setCaseStudyData( { studyData, visibility } );
    }

    // Return
    const hasCaseStudyData = Object.keys( caseStudyData ).length;
    const loadingStatus    = hasCaseStudyData ? 'off' : 'on';
    const loadingClass     = `${ htmlClass.visibility[loadingStatus] } ${ htmlClass.loading }`;
    const caseStudyElement = hasCaseStudyData ? ( <CaseStudy 
                                                        visibility={ caseStudyData.visibility } 
                                                        studyData={ caseStudyData.studyData } /> ) : false;

    return (
        <div>
            <p className={ loadingClass }>Loading. Please wait...</p>
                { caseStudyElement }
        </div>
    );

}

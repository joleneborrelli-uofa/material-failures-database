import axios                             from 'axios';
import React, { useEffect, useState }    from 'react';
import { genericHtmlClass as htmlClass } from '../constants/htmlClass.constants.js';
import { messages }                      from '../constants/webDisplay.constants.js';
import CaseStudy                         from './CaseStudy.component.js';

export default function CaseStudyApi ( props )
{
    // Props
    const { id } = props;
    const 
    {
        loading,
        restricted
    } = messages;

    // State
    const [caseStudyData, setCaseStudyData] = useState( {} );
    const [message, setMessage]             = useState( loading );

    useEffect( () =>
    {
        prepareForDisplay();
    }, [] );

    // Methods
    const fetchDisplayStatus = async () =>
    {
        return axios
            .get( '/api/display' )
            .then( res => res.data.find( item => item.object_id === parseInt( id, 10 ) ) )
            .catch( err => 
            {
                console.error( `Error getting display list: ${ err }` ) 
            } )
    }

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

    const prepareForDisplay = async () =>
    {
        let displayStatus = await fetchDisplayStatus();

        if( displayStatus && displayStatus.case_study === 'on' ) 
        {
            let visibility = await fetchPromptVisibility();
            let studyData  = await fetchStudyData();

            setCaseStudyData( { studyData, visibility } );
        }
        else
        {
            setMessage( restricted );
        }
    }

    // Return
    const hasCaseStudyData = Object.keys( caseStudyData ).length;
    const messageStatus    = hasCaseStudyData ? 'off' : 'on';
    const messageClass     = `${ htmlClass.visibility[messageStatus] } ${ htmlClass.message }`;
    const caseStudyElement = hasCaseStudyData ? ( <CaseStudy 
                                                        visibility={ caseStudyData.visibility } 
                                                        studyData={ caseStudyData.studyData } /> ) : false;

    return (
        <div>
            <p className={ messageClass }>{ message }</p>
                { caseStudyElement }
        </div>
    );

}

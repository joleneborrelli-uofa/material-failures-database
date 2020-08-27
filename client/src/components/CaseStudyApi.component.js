import React, { useEffect, useState }    from 'react';
import { genericHtmlClass as htmlClass } from '../constants/htmlClass.constants.js';
import { messages }                      from '../constants/webDisplay.constants.js';
import CaseStudy                         from './CaseStudy.component.js';
import fetchDisplayStatus                from './api/fetchDisplayStatus.api.js';
import fetchPromptVisibility             from './api/fetchPromptVisibility.api.js';
import fetchFieldVisibility              from './api/fetchFieldVisibility.api.js';
import fetchStudyData                    from './api/fetchStudyData.api.js';

export default function CaseStudyApi ( props )
{
    // Props
    const { id } = props;

    // State
    const [caseStudyData, setCaseStudyData] = useState( {} );
    const [message, setMessage]             = useState( messages.loading );

    useEffect( () =>
    {
        prepareForDisplay();
    }, [] );

    // Methods
    const prepareForDisplay = async () =>
    {
        try
        {
            let displayStatus = await fetchDisplayStatus( id );

            if( displayStatus && displayStatus.case_study === 'on' ) 
            {
                let promptVisibility = await fetchPromptVisibility( id );
                let fieldVisibility  = await fetchFieldVisibility( id ); 
                let studyData        = await fetchStudyData( id, fieldVisibility );

                setCaseStudyData( { studyData, promptVisibility } );
            }
            else
            {
                setMessage( message.restricted );
            }           
        }
        catch( error )
        {
            console.error( error );

            setMessage( messages.error.api );
        }
    }

    // Return
    const hasCaseStudyData = Object.keys( caseStudyData ).length;
    const messageStatus    = hasCaseStudyData ? 'off' : 'on';
    const messageClass     = `${ htmlClass.visibility[messageStatus] } ${ htmlClass.message }`;
    const caseStudyElement = hasCaseStudyData ? ( <CaseStudy 
                                                        visibility={ caseStudyData.promptVisibility } 
                                                        studyData={ caseStudyData.studyData } /> ) : false;

    return (
        <div>
            <p className={ messageClass }>{ message }</p>
                { caseStudyElement }
        </div>
    );

}

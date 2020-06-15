import React              from 'react';
import CaseStudyModuleApi from './caseStudyModuleApi.component.js';
import RecordModuleApi    from './recordModuleApi.component.js';

// React Router
import { useParams } from 'react-router-dom';

export default function Page() 
{

    let
    { 
        page = 'record', 
        id 
    } = useParams();

    if( page === 'case-study' )
    {
        // Make case study query to database with the id number
        return ( <CaseStudyModuleApi id={ id } /> );
    }

    if( page === 'record' )
    {
        // Make record query to database with the id number
        return ( <RecordModuleApi id={ id } /> );
    }
}
import React              from 'react';
import CaseStudyModuleApi from './caseStudyModuleApi.component.js';
import RecordModuleApi    from './recordModuleApi.component.js';

// React Router
import { useParams } from 'react-router-dom';

export default function Page() 
{
    let element = false;

    let
    { 
        page = 'record', 
        id 
    } = useParams();

    if( page === 'case-study' )
    {
        // Make case study query to database with the id number
        element = <CaseStudyModuleApi id={ id } />;
    }

    if( page === 'record' )
    {
        // Make record query to database with the id number
        element = <RecordModuleApi id={ id } />;
    }

    return element;
}
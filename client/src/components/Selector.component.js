import React        from 'react';
import CaseStudyApi from './CaseStudyApi.component.js';
import RecordApi    from './RecordApi.component.js';

// React Router
import { useParams } from 'react-router-dom';

export default function Selector() 
{

    let
    { 
        selector = 'record', 
        id 
    } = useParams();

    if( selector === 'case-study' )
    {
        // Make case study query to database with the id number
        return ( <CaseStudyApi id={ id } /> );
    }

    if( selector === 'record' )
    {
        // Make record query to database with the id number
        return ( <RecordApi id={ id } /> );
    }
}
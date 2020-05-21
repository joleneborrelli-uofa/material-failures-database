import React           from 'react';
import CaseStudyModule from './caseStudyModule.component.js';
import RecordModule    from './recordModule.component.js';

// React Router
import { useParams } from "react-router-dom";

// Will eventually be a singular database response
import { recordDatabase }                from '../database/record.database.js';
import { caseStudyDatabase, visibility } from '../database/caseStudy.database.js';

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
        // Make case study query to database with the ID number
        element = <CaseStudyModule 
                        database={ caseStudyDatabase }
                        visibility={ visibility } />;
    }

    if( page === 'record' )
    {
        // Make record query to database with the ID number
        element = <RecordModule 
                        database={ recordDatabase } />;
    }

    return element;
}
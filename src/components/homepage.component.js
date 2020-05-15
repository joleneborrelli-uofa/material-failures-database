import React           from 'react';
import { mainPage }    from '../constants/webDisplay.constants.js';
import { domain }      from '../constants/path.constants.js';
import { genericHtmlClass as htmlClass } from '../constants/htmlClass.constants.js';

// React Router
import { Link } from "react-router-dom";

// First call will be to the display table
import { displayDatabase } from '../database/display.database.js';


export default function Homepage()
{
    // Make call to database for display table

    const links = displayDatabase.map( ( item, index ) =>
    {
        let 
        {
            id,
            case_study,
            record,
            thumbnail
        } = item;

        let uri           = domain + thumbnail;
        let caseStudyPath = `/case-study/${ id }`;
        let recordPath    = `/record/${ id }`;

        let caseStudyClass = `${ htmlClass.caseStudyLink } ${ htmlClass.visibility[case_study] }`;
        let recordClass    = `${ htmlClass.recordLink } ${ htmlClass.visibility[record] }`;

        return (
            <li 
                key={ index }
                className={ htmlClass.displayItem }>
                <img 
                    className={ htmlClass.displayImage }
                    src={ uri } />
                <Link 
                    className={ caseStudyClass }
                    to={ caseStudyPath }>
                    { mainPage.caseStudyLink }
                </Link>
                <Link 
                    className={ recordClass }
                    to={ recordPath }>
                    { mainPage.recordLink }
                </Link>
            </li>
        );
    } );

    return (
        <div>
            <h2 className={ htmlClass.mainHeader }>{ mainPage.title }</h2>
            <ul>
                { links }
            </ul>
        </div>
    );
}

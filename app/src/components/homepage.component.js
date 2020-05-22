import React, { useEffect, useState }    from 'react';
import { genericHtmlClass as htmlClass } from '../constants/htmlClass.constants.js';
import axios        from 'axios';
import { isArray }  from 'lodash';
import { mainPage } from '../constants/webDisplay.constants.js';
import { domain }   from '../constants/path.constants.js';

// React Router
import { Link } from "react-router-dom";

// First call will be to the display table
import { displayDatabase } from '../database/display.database.js';

export default function Homepage()
{
    const [links, setLinks]     = useState( [] );
    const [loading, setLoading] = useState( 'on' );

    useEffect( () => 
    {
        fetchDisplayItems();
    }, [] );

    // Make call to database for display table
    const fetchDisplayItems = async () => 
    {
        axios
            .get( 'http://localhost:4001/api/display' )
            .then( res => 
            {
                prepareLinks( res.data );
                setLoading( 'off' );
            } )
            .catch( err => 
            {
                console.error( `Error getting display list: ${ err }` ) 
            } )
    }

    const prepareLinks = ( items ) =>
    {
        let links;

        if( !isArray( items ) ) items = [ items ];

        links = items.map( ( item, index ) =>
        {
            let 
            {
                object_id : id,
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

        setLinks( links );
    }

    const loadingClass = `${ htmlClass.visibility[loading] } ${ htmlClass.loading }`;

    return (
        <div>
            <h2 className={ htmlClass.mainHeader }>{ mainPage.title }</h2>
            <p className={ loadingClass }>Loading. Please wait...</p>
            <ul>
                { links }
            </ul>
        </div>
    );
}

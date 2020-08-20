import React, { useEffect, useState }    from 'react';
import { genericHtmlClass as htmlClass } from '../constants/htmlClass.constants.js';
import { mainPage, messages }            from '../constants/webDisplay.constants.js';
import { domain } from '../constants/path.constants.js';
import axios      from 'axios';


// React Router
import { Link } from "react-router-dom";


export default function Home( props )
{
    // State
    const [links, setLinks]     = useState( [] );
    const [loading, setLoading] = useState( 'on' );

    useEffect( () => 
    {
        fetchDisplayItems();
    }, [] );

    // Methods
    const fetchDisplayItems = async () => 
    {
        axios
            .get( '/api/display' )
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

        links = items.map( ( item, index ) =>
        {
            let 
            {
                object_id : id,
                case_study,
                record,
                path
            } = item;

            let uri           = domain + path;
            let caseStudyPath = `/case-study/${ id }`;
            let recordPath    = `/record/${ id }`;

            let caseStudyClass = `${ htmlClass.caseStudyLink } ${ htmlClass.visibility[case_study] }`;
            let recordClass    = `${ htmlClass.recordLink } ${ htmlClass.visibility[record] }`;

            return (
                <li 
                    key={ index }
                    className={ htmlClass.displayItem }>
                    <img 
                        alt=""
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

    const onLogin = e =>
    {
        e.preventDefault();

        props.history.push( '/login' );
    }

    // Return
    const messageClass = `${ htmlClass.visibility[loading] } ${ htmlClass.message }`;

    return (
        <div>
            <button
                className={ htmlClass.loginButton }
                type="button" 
                name="login"
                onClick={ onLogin }>
                { mainPage.loginButton }
            </button>
            <h2 className={ htmlClass.mainHeader }>{ mainPage.title }</h2>
            <p className={ messageClass }>{ messages.loading }</p>
            <ul>
                { links }
            </ul>
        </div>
    );
}

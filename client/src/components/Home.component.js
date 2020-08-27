import React, { useEffect, useState }    from 'react';
import { genericHtmlClass as htmlClass } from '../constants/htmlClass.constants.js';
import { mainPage, messages }            from '../constants/webDisplay.constants.js';
import { domain }                        from '../constants/path.constants.js';
import fetchDisplayItems                 from './api/fetchDisplayItems.api.js';

// React Router
import { Link } from "react-router-dom";

export default function Home( props )
{
    // State
    const [displayItems, setDisplayItems] = useState( [] );
    const [message, setMessage]           = useState( messages.loading );

    useEffect( () => 
    {
        prepareForDisplay();
    }, [] );

    // Methods
    const prepareLinks = () =>
    {
        return displayItems.map( ( item, index ) =>
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
    }

    const prepareForDisplay = async () =>
    {
        try
        {
            const items = await fetchDisplayItems();

            setDisplayItems( items );
        }
        catch( error )
        {
            console.error( error );

            setMessage( messages.error.api );
        }
    }

    const onLogin = e =>
    {
        e.preventDefault();

        props.history.push( '/login' );
    }

    // Return
    const hasDisplayItems = displayItems.length > 0;
    const messageStatus   = hasDisplayItems ? 'off' : 'on';
    const links           = hasDisplayItems ? prepareLinks() : [];
    const messageClass    = `${ htmlClass.visibility[messageStatus] } ${ htmlClass.message }`;

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
            <p className={ messageClass }>{ message }</p>
            <ul>
                { links }
            </ul>
        </div>
    );
}

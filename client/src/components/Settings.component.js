import React, { useEffect, useState } from 'react';
import { settings, messages }         from '../constants/webDisplay.constants.js';
import { createUniqueId }             from '../helpers.js';
import { settingsHtmlClass as htmlClass, genericHtmlClass } from '../constants/htmlClass.constants.js';
import axios from 'axios';
import auth  from '../auth.js';


export default function Settings( props )
{
    // State
    const [listSettings, setListSettings] = useState( [] );

    useEffect( () => 
    {
        fetchSettings();
    }, [] );

    // Methods
    const fetchSettings = async () => 
    {
        return axios
            .get( '/api/settings' )
            .then( res => 
            {
                setListSettings( res.data ) 
            } )
            .catch( err => 
            {
                console.error( `Error getting display list: ${ err }` ) 
            } )
    }

    const onButtonClick = e =>
    {
        e.preventDefault();

        // If the user is not logged in,
        // send them to login page
        if( !auth.loginStatus() )
        {            
            props.history.push( '/login' );
        }
        else
        {
            const fieldName = e.target.name;
            const id        = e.target.value;

            const object      = listSettings.find( item => item.object_id === parseInt( id, 10 ) );
            const fieldValue  = object[fieldName];
            const toggleValue = fieldValue === 'off' ? 'on' : 'off'; 

            return axios
                .post( 'api/settings',
                {
                    fieldString  : `${ fieldName } = '${ toggleValue }'`,
                    objectString : `object_id = ${ parseInt( id, 10 ) }`
                } )
                .then( () => fetchSettings() )
                .catch( err => 
                {
                    console.error( `Error posting settings: ${ err }` ) 
                } )
        }
    }

    const onLogout = e =>
    {
        e.preventDefault();

        auth.logout();

        props.history.push( '/' );
    }

    const getListSettings = () =>
    {
        return listSettings.map( item =>
        {
            let 
            {
                object_id : id,
                name,
                case_study,
                record
            } = item;

            return (
                <ul 
                    className={ htmlClass.list }
                    key={ id }>
                    <li 
                        key={ `${ id }-${ createUniqueId() }` }
                        className={ htmlClass.item }>
                            <p className={ htmlClass.value }>{ name }</p>
                    </li>
                    <li 
                        key={ `${ id }-${ createUniqueId() }` }
                        className={ htmlClass.item }>
                            <p className={ htmlClass.subheader }>{ settings.recordVisibility }</p>
                            <p className={ htmlClass.value }>{ record }</p>
                          <button
                                className={ htmlClass.toggleButton }
                                type="button"
                                name="record"
                                value={ id } 
                                onClick={ onButtonClick }>
                                { settings.toggleButton }
                            </button>
                    </li>
                    <li 
                        key={ `${ id }-${ createUniqueId() }` }
                        className={ htmlClass.item }>
                            <p className={ htmlClass.subheader }>{ settings.caseStudyVisibility }</p>
                            <p className={ htmlClass.value }>{ case_study }</p>
                          <button
                                className={ htmlClass.toggleButton }
                                type="button" 
                                name="case_study"
                                value={ id }
                                onClick={ onButtonClick }>
                                { settings.toggleButton }
                            </button>
                    </li>
                </ul>
            );
        } ); 
    }

    // Return
    const hasListSettings = listSettings.length > 0;
    const messageStatus   = hasListSettings ? 'off' : 'on';
    const messageClass    = `${ genericHtmlClass.visibility[messageStatus] } ${ genericHtmlClass.message }`;

    return (
        <div>
            <button
                className={ htmlClass.logoutButton }
                type="button" 
                name="logout"
                onClick={ onLogout }>
                { settings.logoutButton }
            </button>
            <div>
                <h2 className={ htmlClass.header }>{ settings.pageTitle }</h2>
                <p className={ messageClass }>{ messages.loading }</p>
                { getListSettings() }
            </div>
        </div>
    );
}

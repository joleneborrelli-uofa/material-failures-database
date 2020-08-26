import React, { useEffect, useState } from 'react';
import { settings, messages }         from '../constants/webDisplay.constants.js';
import { createUniqueId }             from '../helpers.js';
import fetchSettings                  from './api/fetchSettings.api.js';
import sendSettings                   from './api/sendSettings.api.js';
import auth                           from '../auth.js';
import 
{ 
    settingsHtmlClass as htmlClass, 
    genericHtmlClass 
} from '../constants/htmlClass.constants.js';

export default function Settings( props )
{
    // State
    const [list, setList] = useState( [] );

    useEffect( () => 
    {
        prepareForDisplay();
    }, [] );

    // Methods
    const onLogout = e =>
    {
        e.preventDefault();

        auth.logout();

        props.history.push( '/' );
    } 

    const onButtonClick = async ( e ) =>
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
            const fieldname = e.target.name;
            const id        = e.target.value;

            const object      = list.find( item => item.object_id === parseInt( id, 10 ) );
            const fieldValue  = object[fieldname];
            const toggleValue = fieldValue === 'off' ? 'on' : 'off'; 

            await sendSettings( id, fieldname, toggleValue );

            prepareForDisplay();
        }
    }

    const prepareList = () =>
    {
        return list.map( item =>
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

    const prepareForDisplay = async () => 
    {
        const settingsList = await fetchSettings();

        setList( settingsList );
    }

    // Return
    const hasList       = list.length > 0;
    const settingsList  = hasList ? prepareList() : [];
    const messageStatus = hasList ? 'off' : 'on';
    const messageClass  = `${ genericHtmlClass.visibility[messageStatus] } ${ genericHtmlClass.message }`;

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
                { settingsList }
            </div>
        </div>
    );
}

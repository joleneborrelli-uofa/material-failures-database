import React, { useState } from 'react';
import auth                from '../auth';
import sendLoginInfo       from './api/sendLoginInfo.api.js';
import { login }           from '../constants/webDisplay.constants.js';
import 
{ 
    loginHtmlClass as htmlClass, 
    genericHtmlClass 
} from '../constants/htmlClass.constants.js';

export default function Login( props )
{
    // State
    const [isValid, setValidity] = useState( true );
    const [message, setMessage]  = useState( '' );


    // Methods
    const prepareLogin = async ( username, password ) =>
    {
        const response = await sendLoginInfo( username, password );
        const message  = response.message ? response.message : '';

        if( message )
        {
            setMessage( message );
        }
        else
        {
            auth.login();

            props.history.push( response.redirectUrl );
        }
    }

    const validate = e =>
    {
        e.preventDefault();

        // Assume it is invalid
        let validity = false;

        const username = e.target[0].value.trim();
        const password = e.target[1].value.trim();

        if( username && password )
        {
            prepareLogin( username, password ); 

            // If there is a username and password,
            // keep the message off
            validity = true; 
        }

        setValidity( validity );
        setMessage( '' );
    }

    const validateVisibility = isValid ? genericHtmlClass.visibility.off : genericHtmlClass.visibility.on;
    const messageVisibility  = message ? genericHtmlClass.visibility.on : genericHtmlClass.visibility.off;
    const validateClass      = `${ validateVisibility } ${ htmlClass.validate }`;
    const messageClass       = `${ messageVisibility } ${ htmlClass.message }`;

    // Return
    return( 
        <form 
            method="POST" 
            onSubmit={ validate }>
            <div className={ htmlClass.loginWrapper }>
                <div className={ htmlClass.inputWrapper }>
                    <label className={ htmlClass.label }>
                        { login.usernameLabel }
                    </label>
                    <input 
                        name="username" 
                        type="text"
                        className={ htmlClass.input } 
                        placeholder={ login.username } />
                </div>
                <div className={ htmlClass.inputWrapper }>
                    <label className={ htmlClass.label }>
                        { login.passwordLabel }
                    </label>
                    <input 
                        name="password" 
                        type="password"
                        className={ htmlClass.input } 
                        placeholder={ login.password } />
                </div>
                    <button 
                        type="submit" 
                        className={ htmlClass.button }>
                        { login.button }
                    </button>
                <div className={ validateClass }>
                    { login.validate }
                </div>
                <div className={ messageClass }>
                    { message }
                </div>
            </div>
        </form> )
}

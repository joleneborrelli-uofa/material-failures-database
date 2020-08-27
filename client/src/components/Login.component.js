import React, { useState } from 'react';
import auth                from '../auth';
import sendLoginInfo       from './api/sendLoginInfo.api.js';
import { login, messages } from '../constants/webDisplay.constants.js';
import 
{ 
    loginHtmlClass as htmlClass, 
    genericHtmlClass 
} from '../constants/htmlClass.constants.js';

export default function Login( props )
{
    // State
    const [message, setMessage] = useState( '' );


    // Methods
    const prepareLogin = async ( username, password ) =>
    {
        try
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
        catch( error )
        {
            console.error( error );

            setMessage( messages.error.login );
        }

    }

    const validate = e =>
    {
        e.preventDefault();

        const username = e.target[0].value.trim();
        const password = e.target[1].value.trim();

        if( username && password )
        {
            prepareLogin( username, password ); 
        }
        else
        {
            setMessage( messages.empty )
        }
    }

    const messageVisibility = message ? genericHtmlClass.visibility.on : genericHtmlClass.visibility.off;
    const messageClass      = `${ messageVisibility } ${ htmlClass.message }`;

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
                <div className={ messageClass }>
                    { message }
                </div>
            </div>
        </form> )
}

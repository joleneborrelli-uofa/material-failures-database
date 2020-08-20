// Author: FreeCodeCamp.org
// "Protected Routes in React Using React Router"
// https://www.youtube.com/watch?v=Y0-qdp-XBJg
import React from 'react';
import auth  from '../auth';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ( { component : Component, ...rest } ) =>
{
    return (
        <Route
            { ...rest }
            render={ props =>
            {
                if( auth.loginStatus() )
                {
                    return <Component { ...props } />
                }
                else
                {
                    return <Redirect to={ { pathname: '/login' } } />
                }
            } }
        ></Route>
    )
};

export default ProtectedRoute;

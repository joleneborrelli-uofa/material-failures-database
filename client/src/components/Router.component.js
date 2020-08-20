import React             from 'react';
import { Route, Switch } from 'react-router-dom';
import Home              from './Home.component.js';
import Selector          from './Selector.component.js';
import Login             from './Login.component.js';
import Settings          from './Settings.component.js';
import ProtectedRoute    from './ProtectedRoute.component.js';


export default function Router()
{
    const Router = () => (
      <div>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/:selector/:id" exact component={ Selector } />
            <ProtectedRoute path="/settings" exact component={ Settings } />
            <Route path="/login" exact component={ Login } />
        </Switch>
      </div>
    )

    return (
        <Switch>
            <Router/>
        </Switch>
    );
}

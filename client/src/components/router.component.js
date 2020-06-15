import React             from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage          from './homepage.component.js';
import Page              from './page.component.js';

export default function Router()
{
    const Router = () => (
      <div>
        <Switch>
            <Route exact path="/" component={ Homepage } />
            <Route path="/:page/:id" exact component={ Page } />
        </Switch>
      </div>
    )

    return (
        <Switch>
            <Router/>
        </Switch>
    );
}

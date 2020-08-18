import React             from 'react';
import { Route, Switch } from 'react-router-dom';
import Home              from './Home.component.js';
import Selector          from './Selector.component.js';
import Settings          from './Settings.component.js';

export default function Router()
{
    const Router = () => (
      <div>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/:selector/:id" exact component={ Selector } />
            <Route path="/settings" exact component={ Settings } />
        </Switch>
      </div>
    )

    return (
        <Switch>
            <Router/>
        </Switch>
    );
}

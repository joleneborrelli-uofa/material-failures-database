import React    from 'react';
import Homepage from './homepage.component.js';
import Page     from './page.component.js';

// React Router
import 
{
  HashRouter,
  Switch,
  Route
} from "react-router-dom";


export default function Router()
{
    return (
        <HashRouter>
            <div>
                <Switch>
                    <Route exact path="/" exact component={ Homepage } />
                    <Route path="/:page/:id" exact component={ Page } />
                </Switch>
            </div>
        </HashRouter>
    );
};

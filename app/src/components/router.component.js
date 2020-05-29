import React    from 'react';
import Homepage from './homepage.component.js';
import Page     from './page.component.js';

// React Router
import 
{
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


export default function Router()
{
    return (
        <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
            <div>
                <Switch>
                    <Route exact path="/" exact component={ Homepage } />
                    <Route path="/:page/:id" exact component={ Page } />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'containers/Home';
import Prerequisites from 'containers/Prerequisites';
import BrowserSupport from 'containers/BrowserSupport';

const Routes = () => (
    <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/prerequisites" exact>
                <Prerequisites />
            </Route>
            <Route path="/supported-browsers" exact>
                <BrowserSupport />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;

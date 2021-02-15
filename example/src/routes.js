import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'containers/Home';
import BrowserSupport from 'containers/BrowserSupport';
import A2HS from 'containers/A2HS';

const Routes = () => (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact>
              <Home />
          </Route>
          <Route path="/browser-support" exact>
              <BrowserSupport />
          </Route>
          <Route path="/installable" exact>
              <A2HS />
          </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;

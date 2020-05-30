import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';
import NavigationBar from './NavigationBar';
import Cantine from '../pages/Cantine';
import PageNotFound from '../pages/PageNotFound';

const Router = () => (
  <BrowserRouter>
    <NavigationBar />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/cantine" component={Cantine} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import PageNotFound from '../pages/PageNotFound';
import Login from '../pages/Login';
import Home from '../pages/HomePage/HomePage';
import NavigationBar from './NavigationBar';

const Router = () => (
  <BrowserRouter>
    {/* <NavigationBar /> */}
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;

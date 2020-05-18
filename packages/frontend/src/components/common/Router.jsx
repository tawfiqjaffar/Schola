import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import PageNotFound from '../pages/PageNotFound';
import Login from '../pages/Login';
import NavigationBar from './NavigationBar';
import Calendar from '../pages/Calendar/Calendar';

const Router = () => (
  <BrowserRouter>
    <NavigationBar />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/Calendar" component={Calendar} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;

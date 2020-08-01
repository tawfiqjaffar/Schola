import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import PageNotFound from '../pages/PageNotFound';
import Login from '../pages/Login';
import Home from '../pages/HomePage/HomePage';
import NavigationBar from './NavigationBar';
import Trombinoscope from '../pages/Trombinoscope';

const redirectToLogin = (Component) => {
  if (!sessionStorage.getItem('token')) return <Login />;
  return <Component />;
};

const Router = () => (
  <BrowserRouter>
    <NavigationBar />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/trombi" render={() => redirectToLogin(Trombinoscope)} />
      <Route path="/home" render={() => redirectToLogin(Home)} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import PageNotFound from '../pages/PageNotFound';
import Login from '../pages/Login';
import Home from '../pages/HomePage/HomePage';
import NavigationBar from './NavigationBar';
import Schedule from '../pages/Schedule/index';
// import Join from '../pages/Chatbox/Join/Join';
// import Chatbox from '../pages/Chatbox/Chat/Chat';

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
      <Route path="/home" render={() => redirectToLogin(Home)} />
      <Route path="/schedule" component={Schedule}/>
      {/* <Route path="/join" component={Join}/> */}
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;

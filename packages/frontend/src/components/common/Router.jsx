import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageNotFound from '../pages/PageNotFound';
<<<<<<< HEAD
import Login from '../pages/Login';
import Home from '../pages/HomePage/HomePage';
import Calendar from '../pages/Calendar/CalendarPage';
=======
>>>>>>> 2c7e5cba841b37408c4d6d5a96696a2759cd31e7
import NavigationBar from './NavigationBar';
import routes from './Route';

const Router = () => (
  <BrowserRouter>
    <NavigationBar />
    <Switch>
<<<<<<< HEAD
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/home" render={() => redirectToLogin(Home)} />
      <Route path="/calendar" render={() => redirectToLogin(Calendar)} />
=======
      {routes.map((el) => (
        <Route key={el.route} exact path={el.route}>
          {el.component}
        </Route>
      ))}
>>>>>>> 2c7e5cba841b37408c4d6d5a96696a2759cd31e7
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;

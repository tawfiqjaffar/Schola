import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageNotFound from '../pages/PageNotFound';
import NavigationBar from './NavigationBar';
import routes from './Route';

const Router = () => (
  <BrowserRouter>
    <NavigationBar />
    <Switch>
      {routes.map((el) => (
        <Route key={el.route} exact path={el.route}>
          {el.component}
        </Route>
      ))}
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;

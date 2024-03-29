import React from 'react';
import Protected from './Protected';
import Login from '../pages/Login';
import Home from '../pages/HomePage/HomePage';
import LandingPage from '../pages/LandingPage';
import RollCall from '../pages/RollCall';
import Dashboard from '../pages/ProfHomePage/Dashboard';

const routes = [
  {
    route: '/',
    component: (
      <LandingPage />
    ),
  },
  {
    route: '/home',
    component: (
      <Protected>
        <Home />
      </Protected>
    ),
  },
  {
    route: '/rollcall',
    component: (
      <Protected>
        <RollCall />
      </Protected>
    )
  },
  {
    route: '/homepageprof',
    component: (
      <Protected>
        <Dashboard />
      </Protected>
    ),
  },
  {
    route: '/login',
    component: (
      <Login />
    ),
  },
];

export default routes;

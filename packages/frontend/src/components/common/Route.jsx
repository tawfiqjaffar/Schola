import React from 'react';
import Protected from './Protected';
import Login from '../pages/Login';
import Home from '../pages/HomePage/HomePage';
import LandingPage from '../pages/LandingPage';

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
    route: '/login',
    component: (
      <Login />
    ),
  },
];

export default routes;

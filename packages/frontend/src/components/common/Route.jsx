import React from 'react';
import Protected from './Protected';
import Login from '../pages/Login';
import Home from '../pages/HomePage/HomePage';
import LandingPage from '../pages/LandingPage';
import HomePageParent from '../pages/HomePageParent/HomePageParent';
import Devoir from '../pages/Devoir/Devoir';

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
    route: '/HomePageParent',
    component: (
      <HomePageParent />
    ),
  },
  {
    route: '/Devoir',
    component: (
      <Devoir />
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

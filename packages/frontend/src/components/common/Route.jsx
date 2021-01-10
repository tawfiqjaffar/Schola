import React from 'react';
import Protected from './Protected';
import Login from '../pages/Login';
import Home from '../pages/HomePage/HomePage';
import LandingPage from '../pages/LandingPage';
import Chatbox from '../pages/Chatbox/Chat/Chat';
import Join from '../pages/Chatbox/Join/Join';
import Notebook from '../pages/Schedule';

const routes = [
  {
    route: '/',
    component: (
      <LandingPage />
    ),
  },
  {
    route: '/joinchat',
    component: (
      <Protected>
        <Join />
      </Protected>
    ),
  },
  {
    route: '/chat',
    component: (
      <Protected>
        <Chatbox />
      </Protected>
    ),
  },
  {
    route: '/notebook',
    component: (
      <Protected>
        <Notebook />
      </Protected>
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

import React from 'react';

// Front End
const Login = React.lazy(() => import('./components/views/page/Login'));
const NotFound = React.lazy(() => import('./components/views/page/NotFound_404'));
const ForgotPassword = React.lazy(() => import('./components/views/page/ForgotPassword'));
const Home = React.lazy(() => import('./components/views/page/Home'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

const routes = [
  { path: '/', exact: true, name: 'Landing', component: Home },
  { path: '/login', exact: true, name: 'Login', component: Login },
  { path: '/forgotpassword', exact: true, name: 'ForgotPassword', component: ForgotPassword },
    
  // Handle 404 Not Found
  { path: '*', name: 'Landing', component: NotFound },
];

export default routes;
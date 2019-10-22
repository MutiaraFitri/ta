import React from 'react';

// Front End
const Login = React.lazy(() => import('./components/views/page/Login'));
const NotFound = React.lazy(() => import('./components/views/page/NotFound_404'));
const ForgotPassword = React.lazy(() => import('./components/views/page/ForgotPassword'));
const Home = React.lazy(() => import('./components/views/page/Home'));
const Ticket = React.lazy(() => import('./components/views/page/Ticket'));
const Profile = React.lazy(() => import('./components/views/page/Profile'));
const Report = React.lazy(() => import('./components/views/page/Report'));
const History = React.lazy(() => import('./components/views/page/History'));
const About = React.lazy(() => import('./components/views/page/About'));
const ProblemSolve = React.lazy(() => import('./components/views/page/ProblemSolve'));
const DetProblemSolve = React.lazy(() => import('./components/views/page/DetailProblemSolve'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

const routes = [
  { path: '/', exact: true, name: 'Landing', component: Home },
  { path: '/login', exact: true, name: 'Login', component: Login },
  { path: '/ticket', exact: true, name: 'Login', component: Ticket },
  { path: '/profile', exact: true, name: 'Login', component: Profile },
  { path: '/forgotpassword', exact: true, name: 'ForgotPassword', component: ForgotPassword },
  { path: '/report', exact: true, name: 'Report', component: Report },
  { path: '/history', exact: true, name: 'History', component: History },
  { path: '/about', exact: true, name: 'History', component: About },
  { path: '/problemsolve', exact: true, name: 'History', component: ProblemSolve },
  { path: '/detproblemsolve', exact: true, name: 'History', component: DetProblemSolve },
    
  // Handle 404 Not Found
  { path: '*', name: 'Landing', component: NotFound },
];

export default routes;
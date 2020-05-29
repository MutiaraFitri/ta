import React from 'react';

// Front End
const Login = React.lazy(() => import('./components/views/page/Login'));
const NotFound = React.lazy(() => import('./components/views/page/NotFound_404'));
const ForgotPassword = React.lazy(() => import('./components/views/page/ForgotPassword'));
const Home = React.lazy(() => import('./components/views/page/Home'));
const Ticket = React.lazy(() => import('./components/views/page/Ticket'));
const Profile = React.lazy(() => import('./components/views/page/Profile'));
const NewArticle = React.lazy(() => import('./components/views/page/NewArticle'));
const Article = React.lazy(() => import('./components/views/page/Article'));
const History = React.lazy(() => import('./components/views/page/History'));
const About = React.lazy(() => import('./components/views/page/About'));
const ProblemSolve = React.lazy(() => import('./components/views/page/ProblemSolve'));
const DetProblemSolve = React.lazy(() => import('./components/views/page/DetailProblemSolve'));
const TicketDet = React.lazy(() => import('./components/views/page/TicketDet'));
const AllTicket = React.lazy(() => import('./components/views/page/AllTicket'));
const Report = React.lazy(() => import('./components/views/page/Report'));
const DetailTicket = React.lazy(() => import('./components/views/page/DetailTicket'));
const Chart_Component = React.lazy(() => import('./components/views/Chart_Component'));
const DetailTickets = React.lazy(() => import('./components/views/page/DetailTicket'));
const EditProfile = React.lazy(() => import('./components/views/page/EditProfile'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

const routes = [
  { path: '/', exact: true, name: 'Landing', component: Home },
  { path: '/home', exact: true, name: 'Landing', component: Home },
  { path: '/login', exact: true, name: 'Login', component: Login },
  { path: '/ticket', exact: true, name: 'Login', component: Ticket },
  { path: '/profile', exact: true, name: 'Login', component: Profile },
  { path: '/forgotpassword', exact: true, name: 'ForgotPassword', component: ForgotPassword },
  { path: '/new-article', exact: true, name: 'Report', component: NewArticle },
  { path: '/article', exact: true, name: 'Report', component: Article },
  { path: '/history', exact: true, name: 'History', component: History },
  { path: '/about', exact: true, name: 'History', component: About },
  { path: '/problemsolve', exact: true, name: 'History', component: ProblemSolve },
  { path: '/detproblemsolve', exact: true, name: 'History', component: DetProblemSolve },
  { path: '/ticketdet', exact: true, name: 'TicketDet', component: TicketDet },
  { path: '/all-ticket', exact: true, name: 'AllTicket', component: AllTicket },
  { path: '/detail-ticket', exact: true, name: 'DetailTicket', component: DetailTicket },
  { path: '/report', exact: true, name: 'DetailTicket', component: Report },
  { path: '/chart', exact: true, name: 'Chart_Component', component: Chart_Component },
  { path: '/ticket/detail/:id', exact: true, name: 'DetailTicket', component: DetailTickets },
  { path: '/edit-profile', exact: true, name: 'EditProfile', component: EditProfile },




  // Handle 404 Not Found
  { path: '*', name: 'Landing', component: NotFound },
];

export default routes;
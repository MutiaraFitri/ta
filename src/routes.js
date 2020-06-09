import React from 'react';

// Front End
const About = React.lazy(() => import('./components/views/page/About'));
const Article = React.lazy(() => import('./components/views/page/Article'));
const AllTicket = React.lazy(() => import('./components/views/page/AllTicket'));
const Chart_Component = React.lazy(() => import('./components/views/Chart_Component'));
const DetailTickets = React.lazy(() => import('./components/views/page/DetailTicket'))
const DetailTicket = React.lazy(() => import('./components/views/page/DetailTicket'));
const DetProblemSolve = React.lazy(() => import('./components/views/page/DetailProblemSolve'));
const EditProfile = React.lazy(() => import('./components/views/page/EditProfile'));
const ForgotPassword = React.lazy(() => import('./components/views/page/ForgotPassword'));
const History = React.lazy(() => import('./components/views/page/History'));
const Home = React.lazy(() => import('./components/views/page/Home'));
const Login = React.lazy(() => import('./components/views/page/Login'));
const Message = React.lazy(() => import('./components/views/page/Message'));
const NotFound = React.lazy(() => import('./components/views/page/NotFound_404'));
const NewArticle = React.lazy(() => import('./components/views/page/NewArticle'));
const ProblemSolve = React.lazy(() => import('./components/views/page/ProblemSolve'));
const KB = React.lazy(() => import('./components/views/page/KnowledgeBase'));
const Profile = React.lazy(() => import('./components/views/page/Profile'));
const Reset = React.lazy(() => import('./components/views/page/ResetPassword'));
const Report = React.lazy(() => import('./components/views/page/Report'));
const Ticket = React.lazy(() => import('./components/views/page/Ticket'));
const TicketDet = React.lazy(() => import('./components/views/page/TicketDet'));
const Rating = React.lazy(() => import('./components/views/page/Rating'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

const routes = [
  { path: '/', exact: true, name: 'Landing', component: Home },
  { path: '/about', exact: true, name: 'History', component: About },
  { path: '/all-ticket', exact: true, name: 'AllTicket', component: AllTicket },
  { path: '/article', exact: true, name: 'Report', component: Article },
  { path: '/chart', exact: true, name: 'Chart_Component', component: Chart_Component },
  { path: '/detail-ticket', exact: true, name: 'DetailTicket', component: DetailTicket },
  { path: '/detproblemsolve', exact: true, name: 'History', component: DetProblemSolve },
  { path: '/forgotpassword', exact: true, name: 'ForgotPassword', component: ForgotPassword },
  { path: '/history', exact: true, name: 'History', component: History },
  { path: '/home', exact: true, name: 'Landing', component: Home },
  { path: '/login', exact: true, name: 'Login', component: Login },
  { path: '/new-article', exact: true, name: 'Report', component: NewArticle },
  { path: '/knowledgebase/:id', exact: true, name: 'KB', component: KB },
  { path: '/profile', exact: true, name: 'Login', component: Profile },
  { path: '/problemsolve', exact: true, name: 'History', component: ProblemSolve },
  { path: '/reset/:token', exact: true, name: 'History', component: Reset },
  { path: '/report', exact: true, name: 'DetailTicket', component: Report },
  { path: '/ticket/:detail', exact: true, name: 'Login', component: Ticket },
  { path: '/ticketdet', exact: true, name: 'TicketDet', component: TicketDet },
  { path: '/ticket/detail/:id', exact: true, name: 'DetailTicket', component: DetailTickets },
  { path: '/edit-profile', exact: true, name: 'EditProfile', component: EditProfile },
  { path: '/rating', exact: true, name: 'Rating', component: Rating },
  { path: '/message/:id', exact: true, name: 'Message', component: Message },



  // Handle 404 Not Found
  { path: '*', name: 'Landing', component: NotFound },
];

export default routes;
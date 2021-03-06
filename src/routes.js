import React from 'react';

// Front End
// const About = React.lazy(() => import('./components/views/page/About'));
// const Rating = React.lazy(() => import('./components/views/page/Rating'));
const Article = React.lazy(() => import('./components/views/page/Article'));
const AllTicket = React.lazy(() => import('./components/views/page/AllTicket'));
const Chart_Component = React.lazy(() => import('./components/views/Chart_Component'));
const DetailArticle = React.lazy(() => import('./components/views/page/DetailArticle'));
const DetailTickets = React.lazy(() => import('./components/views/page/DetailTicket'))
const DetailTicket = React.lazy(() => import('./components/views/page/DetailTicket'));
const DetProblemSolve = React.lazy(() => import('./components/views/page/DetailProblemSolve'));
const EditProfile = React.lazy(() => import('./components/views/page/EditProfile'));
const EditKb = React.lazy(() => import('./components/views/page/EditKb'));
const ForgotPassword = React.lazy(() => import('./components/views/page/ForgotPassword'));
const History = React.lazy(() => import('./components/views/page/History'));
const Home = React.lazy(() => import('./components/views/page/Home'));
const Login = React.lazy(() => import('./components/views/page/Login'));
const Message = React.lazy(() => import('./components/views/page/Message'));
const Notification = React.lazy(() => import('./components/views/page/Notification'));
const NotFound = React.lazy(() => import('./components/views/page/NotFound_404'));
const NewArticle = React.lazy(() => import('./components/views/page/NewArticle'));
const NewKb = React.lazy(() => import('./components/views/page/NewKb'));
const ProblemSolve = React.lazy(() => import('./components/views/page/ProblemSolve'));
const Profile = React.lazy(() => import('./components/views/page/Profile'));
const Reset = React.lazy(() => import('./components/views/page/ResetPassword'));
const Report = React.lazy(() => import('./components/views/page/Report'));
const Ticket = React.lazy(() => import('./components/views/page/Ticket'));
const TicketDet = React.lazy(() => import('./components/views/page/TicketDet'));




// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

const routes = [
  { path: '/', exact: true, name: 'Landing', component: Home },
  // { path: '/about', exact: true, name: 'History', component: About },
  { path: '/all-ticket', exact: true, name: 'AllTicket', component: AllTicket },
  { path: '/article', exact: true, name: 'Report', component: Article },
  { path: '/article/detail/:id', exact: true, name: 'DetailArticle', component: DetailArticle },
  { path: '/detproblemsolve', exact: true, name: 'History', component: DetProblemSolve },
  { path: '/chart', exact: true, name: 'Chart_Component', component: Chart_Component },
  { path: '/forgotpassword', exact: true, name: 'ForgotPassword', component: ForgotPassword },
  { path: '/history', exact: true, name: 'History', component: History },
  { path: '/home', exact: true, name: 'Landing', component: Home },
  { path: '/login', exact: true, name: 'Login', component: Login },
  { path: '/new-article', exact: true, name: 'Report', component: NewArticle },
  { path: '/edit/kb/:id', exact: true, name: 'KB', component: EditKb },
  { path: '/new/kb/:id', exact: true, name: 'KB', component: NewKb },
  { path: '/profile', exact: true, name: 'Login', component: Profile },
  { path: '/Notification', exact: true, name: 'Login', component: Notification },
  { path: '/edit-profile', exact: true, name: 'EditProfile', component: EditProfile },
  { path: '/problemsolve', exact: true, name: 'History', component: ProblemSolve },
  { path: '/reset/:token', exact: true, name: 'History', component: Reset },
  { path: '/report', exact: true, name: 'DetailTicket', component: Report },
  { path: '/ticket/:detail', exact: true, name: 'Login', component: Ticket },
  { path: '/ticketdet', exact: true, name: 'TicketDet', component: TicketDet },
  { path: '/detail-ticket', exact: true, name: 'DetailTicket', component: DetailTicket },
  { path: '/ticket/detail/:id', exact: true, name: 'DetailTicket', component: DetailTickets },
  { path: '/ticket/detail/:id/:notification_id', exact: true, name: 'DetailTicket', component: DetailTickets },
  { path: '/message/:id', exact: true, name: 'Message', component: Message },
  { path: '/message/:id/:notification_id', exact: true, name: 'Message', component: Message },



  // Handle 404 Not Found
  { path: '*', name: 'Landing', component: NotFound },
];

export default routes;
import React from 'react';
import './App.css';
import './assets/style.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/views/page/Login'
import Ticketing from './components/Services';
import ForgotPassword from './components/views/page/ForgotPassword';
import ResetPassword from './components/views/page/ResetPassword';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/reset/:token" component={ResetPassword} />
          <Route path="/" component={Ticketing} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;




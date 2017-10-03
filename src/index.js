import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './components/Home';
import Login from './components/Login';
import Scoreboard from './components/Scoreboard';
import SignUp from'./components/SignUp';
import Legal from './components/Legal';
import UserHome from './components/UserHome';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Scoreboard" component={Scoreboard}/>
        <Route path="/SignUp" component={SignUp}/>
        <Route path="/Legal" component={Legal}/>
        <Route path="/UserHome" component={UserHome}/>
      </Switch>
    </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();

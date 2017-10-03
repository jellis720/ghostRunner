import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import BaseLayout from './BaseLayout';

export default class Home extends Component {

  render() {
    return (
      <BaseLayout>
        <div className="homeLinks">
          <ul className="navbar-nav">
            <li className="nav-link">
              <NavLink to="/Login" className="navText">Login</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/SignUp" className="navText">Sign Up</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/Scoreboard" className="navText">Scoreboard</NavLink>
            </li>
            <li className="nav-link">
              <a href="https://www.mtjm.org/" className="navText">Donate</a>
            </li>
          </ul>
        </div>
      </BaseLayout>
    );
  }
}

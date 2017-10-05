import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import BaseLayout from './BaseLayout';

export default class UserHome extends Component {

  render() {
    return (
      <BaseLayout>
        <div className="homeLinks">
          <ul className="navbar-nav">
            <li className="nav-link">
              <NavLink to="/PersonalScoreboard" className="navText">Your Progess</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/AddRun" className="navText">Add Your Miles</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/Scoreboard" className="navText">View All Runners</NavLink>
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

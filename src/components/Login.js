import React, {Component} from 'react';
import BaseLayout from './BaseLayout';

export default class Login extends Component {

  render() {
    return (
      <BaseLayout>
        <div className="loginForm">
          <form method="post">
            <input placeholder="Name"></input>
            <input placeholder="Password"></input>
            <button>Login</button>
          </form>
        </div>
      </BaseLayout>
    );
  }
}

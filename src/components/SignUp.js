import React, {Component} from 'react';
import BaseLayout from './BaseLayout';

export default class SignUp extends Component {

  render() {
    return (
      <BaseLayout>
        <div className="signUpForm">
          <form method="post">
            <input placeholder="Name"></input>
            <input placeholder="Email"></input>
            <input placeholder="Password"></input>
            <input placeholder="Confirm Password"></input>
            <button>Next</button>
          </form>
        </div>
      </BaseLayout>
    );
  }
}

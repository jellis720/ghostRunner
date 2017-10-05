import React, {Component} from 'react';
import BaseLayout from './BaseLayout';
import legal from '../images/legal.jpg'

export default class SignUp extends Component {

  render() {
    return (
      <BaseLayout>
        <div className="signUpForm">
          <form method="post">
            <img className="legalForm" src={legal}/>
            <input placeholder="Name"></input>
            <button>Submit</button>
          </form>
        </div>
      </BaseLayout>
    );
  }
}

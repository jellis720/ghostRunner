import React, {Component} from 'react';
import logoImage from '../images/logo.png';

export default class BaseLayout extends Component {
  render(){
    return (
      <div>
        <nav>
          <div>
            <div className="jumbotron title-lg">
              <img className="logoImage" src={logoImage} alt="ghostrunner"/>
            </div>
          </div>
        </nav>
        {this.props.children}
        <footer>
          <p>Ghost Runner is property of Duality Development and Consulting 2017 ©.</p>
        </footer>
      </div>
    );
  }
}

import React, {Component} from 'react';
import BaseLayout from './BaseLayout';

export default class Scoreboard extends Component {

  render() {
    return (
      <BaseLayout>
        <div className="scoreboard">
          <form>
            <textarea>1.Filler Name Location</textarea>
            <textarea>2.Filler Name Location</textarea>
            <textarea>3.Filler Name Location</textarea>
            <textarea>4.Filler Name Location</textarea>
            <textarea>5.Filler Name Location</textarea>
          </form>
        </div>
      </BaseLayout>
    );
  }
}

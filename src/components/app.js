/* eslint-disable import/no-named-as-default */

import React, { Component } from 'react';
import Pomodoro from './pomodoro';

export class App extends Component {
  render () {
    return (
      <div className="app">
        <Pomodoro />
      </div>
    );
  }
}

export default App;

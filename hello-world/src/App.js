import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Clock from "./Clock";
import ActionLink from "./ActionLink";
import Toogle from "./Toogle";
import LoginControl from "./LoginControl";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-body">
          <img src={logo} className="App-logo" alt="logo"/>
          <h3>My first React Components</h3>
          <Clock/>
          <ActionLink/>
          <Toogle/>
        <LoginControl />

        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput';
import UserInput from './UserInput';

class App extends Component {
  state = {
    username: "Pepe"
  }

  changeHandler = (event) => {
      this.setState({
        username: event.target.value
      })
  } 

  render() {
    return (
      <div className="App">
        <UserInput name={this.state.username} change={this.changeHandler}/>
        <UserOutput name={this.state.username} />
      </div>
    );
  }
}

export default App;

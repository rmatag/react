import React, { Component } from 'react';
import './App.css';
import InputField from './InputField';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class App extends Component {
  state = {
    word: ''
  } 

  changeHandler = (event) => {
    this.setState({
      word: event.target.value
    });
  }

  deleteLetter = (index) => {
    let word =[...this.state.word].join('');
    let updatedWord = word.slice(0, index).concat(word.slice(index + 1));
    this.setState({
      word: updatedWord
    });
  }

  render() {
    let chars = this.state.word.split('').map((l, index) => {
          return <CharComponent 
                letter={l} 
                click={() => this.deleteLetter(index)}/>
    });

    return (
      <div className="App">
        <InputField word={this.state.word} change={this.changeHandler}/>     
        <ValidationComponent length={this.state.word.length} />
       {chars} 
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';

class Toogle extends Component {
  constructor(props) {
    super(props);
    this.state ={isToggleOn: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
        <button className="toggleButton" onClick={this.handleClick}>
          {this.state.isToggleOn ? 'Toggle ON' : 'Toggle OFF'}
        </button>
    );
  }
}

export default Toogle;
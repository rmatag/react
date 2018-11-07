import React, {Component} from 'react';

class ActionLink extends Component {

  handleClick(e){
    e.preventDefault();
    console.log("You clicked the link");
  }

  render(){
    return (
        <a className="appLink" href="#" onClick={this.handleClick}>
          Click me
        </a>
    );
  }
}

export default ActionLink;
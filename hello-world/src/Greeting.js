import React, {Component} from 'react';
import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.loggedIn = props.loggedIn;
  }

  render() {
    if (this.loggedIn) {
      return <UserGreeting/>
    } else {
      return <GuestGreeting/>
    }
  }
}
export default Greeting;
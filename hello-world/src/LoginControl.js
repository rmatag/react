import React, {Component} from 'react';
import Greeting from "./Greeting";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }


  render() {
    const loggedIn = this.state.isLoggedIn;
    let button;

    if (loggedIn){
      button = <LogoutButton onClick = {this.handleLogoutClick}/>;
    } else{
      button = <LoginButton onClick = {this.handleLoginClick}/>;
    }

    return (
        <div>
          <Greeting loggedIn={this.state.isLoggedIn} />
          {button}
        </div>
    );
  }
}
export default LoginControl;
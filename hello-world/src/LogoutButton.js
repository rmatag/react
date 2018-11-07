import React from "react";

function LogoutButton(props) {
  return (
      <button onClick={props.onClick}>
        LogOut
      </button>
  );
}

export default LogoutButton;

import React, { Component } from 'react';

const userInput = (props) => {
    return (
        <div>
            <input onChange={props.change} type="text" value={props.name}/>
        </div>
    );
}

export default userInput;
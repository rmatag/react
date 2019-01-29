import React, { Component } from 'react';

const inputField = (props) => { 
    return (
        <div>
            <input type="text" onChange={props.change} value={props.word}/>
        </div>
    );
}

export default inputField;
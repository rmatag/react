import React, { Component } from 'react';

const charComp = (props) => {
    const style = {
        display: "inline-block", 
        padding: "16px", 
        textAlign: "center", 
        margin: "16px", 
        border: "1px solid black"
    }
    return (
        
        <div style={style} onClick={props.click}>
            <h3>{props.letter}</h3>
        </div>
    );
} 

export default charComp;
import React, { Component } from 'react';

const validationComp = (props) => {
    let msg = props.length >= 5 ? 'Text long enough' : 'Text too short';   
    return (
        <div>
            <p>{msg}</p>
        </div>
    );
}

export default validationComp;
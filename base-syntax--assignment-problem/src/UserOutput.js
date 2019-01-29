import React, { Component } from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>Paragraph 1</p>
            <p>Paragraph 2 with name: {props.name} </p>
        </div>
    );
}

export default userOutput;
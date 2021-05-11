import React, { useState } from 'react';

const Scoreboard = (props) => {
    
    let content;
    content = (
        <React.Fragment>
            <h1 className="header">Scoreboard</h1>
            <h2 className="header">Current Score: {props.currentScore}</h2>
            <h2 className="header">High Score: {props.highScore}</h2>
        </React.Fragment>
    )

    if (props.currentScore === 12) {
        content = (
            <React.Fragment>
            <h1 className="header">Scoreboard</h1>
            <h1 className="header">~~~ Congratulations ~~~ <br></br>
            You have reached the highest possible score!</h1>
            <h2 className="header">Current Score: {props.currentScore}</h2>
            <h2 className="header">High Score: {props.highScore}</h2>
        </React.Fragment>
        )
    }


    return content;
}

export default React.memo(Scoreboard);

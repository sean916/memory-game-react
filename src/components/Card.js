import React, { useState } from 'react';

// gotta fix cards object iterator maybe?


const Card = (props) => {
    console.log(props.cardsObj)
    let cardsArr = props.cardsObj;

    let content; 
    content = (
        <React.Fragment>
            <h2 className="header"> - Below are 12 words. 
                <br></br>
                 - Click a word to score a point.
                <br></br>
                 - Once you click a word, you cannot click it again or else the game resets.
            </h2>

            {
                cardsArr.map((thisCard) => {
                    return (
                        <button
                        key={thisCard.id}
                        onClick={props.handleCardClick.bind(this, thisCard)}
                        >
                            {thisCard.name}
                        </button>
                    )
                })
            }
           
       
        </React.Fragment>
    )

    return content;
}

export default React.memo(Card);

            //     Object.keys(props.cardsObj).map((thisKey) => {
            //         console.log(`thisKey is ${thisKey}`)
            //        return (     
            //         <button 
            //             key={thisKey}
            //             id={thisKey}
            //             onClick={props.handleCardClick.bind(this, thisKey)}>
            //                 {thisKey}
            //         </button>
            //         )
            //     })

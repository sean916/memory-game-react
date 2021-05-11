import React, { useState } from 'react';

import Scoreboard from './components/Scoreboard';
import Card from './components/Card';
import './App.css';

const App = props => {

  const [currentScore, setCurrentScore] = useState(0);

  const [highScore, setHighScore] = useState(0);

  const [cardsObj, setCardsObj] = useState([
    {id: 0,  clicked: false, name: 'cat'},
    {id: 1,  clicked: false, name: 'dog'},
    {id: 2,  clicked: false, name: 'bird'},
    {id: 3,  clicked: false, name: 'dolphin'},
    {id: 4,  clicked: false, name: 'skeleton'},
    {id: 5,  clicked: false, name: 'glasses'},
    {id: 6,  clicked: false, name: 'wings'},
    {id: 7,  clicked: false, name: 'tortoise'},
    {id: 8,  clicked: false, name: 'bag'},
    {id: 9,  clicked: false, name: 'photo'},
    {id: 10, clicked: false, name: 'word'},
    {id: 11, clicked: false, name: 'big'},
  ]);

  const shuffleCards = () => {

    for (let i = cardsObj.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let tempVal = cardsObj[i];
      cardsObj[i] = cardsObj[j];
      cardsObj[j] = tempVal;
    }
  }

  shuffleCards();

  const increaseScore = () => {
    console.log('Increase score...')

    let newScore = currentScore + 1;
    console.log(`newScore is ${newScore}`)

    if (newScore > highScore) { 
      setHighScore(newScore);
      setCurrentScore(newScore);
    } else {
      setCurrentScore(newScore);
    };
  };
  
  const handleCardClick = (thisCard) => {
    console.log('Handle card click...')
    console.log(`thisCard is ${thisCard.id}`)


    if (thisCard.clicked === true) {
      resetCards();

    } else if (thisCard.clicked === false) {
      increaseScore()

      let newArr = [];
      for (let i = 0; i < cardsObj.length; i++) {
        if (cardsObj[i].id !== thisCard.id) {
          newArr.push(cardsObj[i])
        }
      }
      thisCard.clicked = true;
      newArr.push(thisCard)
      setCardsObj(newArr);
      
      shuffleCards();
    }
  }



  const resetCards = () => {
    console.log('Reset Cards and Current Score...')

    setCurrentScore(0);

    setCardsObj([
      {id: 0,  clicked: false, name: 'cat'},
      {id: 1,  clicked: false, name: 'dog'},
      {id: 2,  clicked: false, name: 'bird'},
      {id: 3,  clicked: false, name: 'dolphin'},
      {id: 4,  clicked: false, name: 'skeleton'},
      {id: 5,  clicked: false, name: 'glasses'},
      {id: 6,  clicked: false, name: 'wings'},
      {id: 7,  clicked: false, name: 'tortoise'},
      {id: 8,  clicked: false, name: 'bag'},
      {id: 9,  clicked: false, name: 'photo'},
      {id: 10, clicked: false, name: 'word'},
      {id: 11, clicked: false, name: 'big'},
    ]);

    shuffleCards();

  }

  let content = (
    <React.Fragment>

      < Scoreboard className="header"
      currentScore={currentScore}
      highScore={highScore} 
      />
      <hr></hr>
      <Card 
      cardsObj={cardsObj}
      handleCardClick={handleCardClick}
      />

    </React.Fragment>
  );
  
  return content;

}

export default App;

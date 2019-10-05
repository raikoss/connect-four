import React, { useState, useCallback } from 'react';
import Board from '../Board';
import './app.css';

const xSize = 7;
const ySize = 6;
const numberOfPlayers = 2;

const App = () => {
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [winner, setWinner] = useState();

  const onPlace = useCallback(wonPlayer => {
    if (wonPlayer) {
      setWinner(wonPlayer);
      return;
    }

    setCurrentPlayer(prevPlayer => {
      let newPlayer;
  
      if (prevPlayer === numberOfPlayers - 1) {
        newPlayer = 0;
      } else {
        newPlayer = prevPlayer + 1;
      }
  
      return newPlayer;
    })
  }, []);

  return (
    <div className='app'>
      <Board 
        xSize={xSize}
        ySize={ySize}
        currentPlayer={currentPlayer}
        onPlace={onPlace}
      />

      {winner ? (
        <p>Congratulations, Player {winner}!</p>
      ) : (
        <p>Current player: Player {currentPlayer + 1}</p>
      )}
    </div>
  )
}

export default App;
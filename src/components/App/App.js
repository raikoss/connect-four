import React, { useState } from 'react';
import Board from '../Board';
import './app.css';

const xSize = 7;
const ySize = 6;
const numberOfPlayers = 2;

const App = () => {
  const [currentPlayer, setCurrentPlayer] = useState(0);

  const nextPlayer = () => {
    let newPlayer;

    if (currentPlayer === numberOfPlayers - 1) {
      newPlayer = 0;
    } else {
      newPlayer = currentPlayer + 1;
    }

    setCurrentPlayer(newPlayer);
  }

  return (
    <div className='app'>
      <Board xSize={xSize} ySize={ySize} currentPlayer={currentPlayer} onPlace={nextPlayer} />
    </div>
  )
}

export default App;
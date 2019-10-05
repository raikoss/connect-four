import React from 'react';
import Board from '../Board';
import './app.css';

const xSize = 7;
const ySize = 6;

const App = () => {

  return (
    <div className='app'>
      <Board xSize={xSize} ySize={ySize} />
    </div>
  )
}

export default App;
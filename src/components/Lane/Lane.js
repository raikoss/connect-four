import React from 'react';
import './lane.css'
import Piece from '../Piece';

const Lane = ({ lane, addPiece, currentPlayer }) => {
  return (
    <div className='lane' onClick={addPiece}>
      {lane.map((piece, i) => 
        <Piece key={i} piece={piece} />
      )}
    </div>
  )
}

export default Lane;
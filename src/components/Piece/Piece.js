import React from 'react';
import './piece.css';

const getPieceColor = piece => {
  switch (piece) {
    case 0:
      return 'red';
    case 1: 
      return 'blue';
    case 2: 
      return 'yellow';
    case 3: 
      return 'green';

    default:
      return 'white';
  }
}

const Piece = ({ piece }) => {
  return (
    <div className='piece' style={{ backgroundColor: getPieceColor(piece) }}>

    </div>  
  )
}

export default Piece;

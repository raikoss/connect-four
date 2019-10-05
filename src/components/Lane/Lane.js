import React from 'react';
import './lane.css'
import Piece from '../Piece';

const Lane = ({ lane, addPiece }) => {
  return (
    <div className='lane' onClick={addPiece}>
      {lane.map(piece => 
        <Piece piece={piece} />
      )}
    </div>
  )
}

export default Lane;
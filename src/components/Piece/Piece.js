import React from 'react';
import './piece.css';

const Piece = ({ piece }) => {
  return (
    <div className='piece' style={{ backgroundColor: piece ? 'red': '' }}>

    </div>  
  )
}

export default Piece;

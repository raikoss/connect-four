import React from 'react';
import './lane.css'
import Piece from '../Piece';

const Lane = ({ lane }) => {
  return (
    <div className='lane'>
      {lane.map(piece => 
        <Piece />
      )}
    </div>
  )
}

export default Lane;
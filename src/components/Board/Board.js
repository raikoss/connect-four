import React, { useState } from 'react';
import './board.css';
import Lane from '../Lane';

const Board = ({ xSize, ySize }) => {
  const [lanes, setLanes] = useState(() => {
    const lanes = [];

    for (let i = 0; i < xSize; i++) {
      const lane = [];

      for (let j = 0; j < ySize; j++) {
        lane.push(null);
      }

      lanes.push(lane);
    }

    return lanes;
  });

  return (
    <div className='board'>
      {lanes.map(lane => 
        <Lane lane={lane} />
      )}
    </div>
  )
}

export default Board;
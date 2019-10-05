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

  const addPiece = laneIndex => {
    const newLane = lanes[laneIndex].slice();
    const openSpotIndex = newLane.indexOf(null);
    newLane[openSpotIndex] = { player: 'Player 1' };
    const newLanes = lanes.slice();
    newLanes[laneIndex] = newLane;

    setLanes(newLanes);
  }

  return (
    <div className='board'>
      {lanes.map((lane, i) => 
        <Lane lane={lane} addPiece={() => addPiece(i)} />
      )}
    </div>
  )
}

export default Board;
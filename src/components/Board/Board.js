import React, { useState } from 'react';
import './board.css';
import Lane from '../Lane';

const Board = ({ xSize, ySize, currentPlayer, onPlace }) => {
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

  console.log(lanes);

  const addPiece = laneIndex => {
    const newLane = lanes[laneIndex].slice();
    const openSpotIndex = newLane.indexOf(null);
    newLane[openSpotIndex] = currentPlayer;
    const newLanes = lanes.slice();
    newLanes[laneIndex] = newLane;

    setLanes(newLanes);
    onPlace();
  }

  return (
    <div className='board'>
      {lanes.map((lane, i) => 
        <Lane key={i} lane={lane} addPiece={() => addPiece(i)} currentPlayer={currentPlayer} />
      )}
    </div>
  )
}

export default Board;
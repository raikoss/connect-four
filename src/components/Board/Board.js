import React, { useState, useEffect } from 'react';
import './board.css';
import Lane from '../Lane';
import winChecker from '../../utils/winChecker';

const initLanes = (xSize, ySize) => {
  const lanes = [];

  for (let i = 0; i < xSize; i++) {
    const lane = [];

    for (let j = 0; j < ySize; j++) {
      lane.push(null);
    }

    lanes.push(lane);
  }

  return lanes;
}

const Board = ({ xSize, ySize, currentPlayer, onPlace }) => {
  const [lanes, setLanes] = useState(initLanes(xSize, ySize));
  const [lastMove, setLastMove] = useState();

  useEffect(() => {
    if (!lastMove) return;

    const winner = winChecker(lanes, lastMove, xSize, ySize, currentPlayer);
    onPlace(winner);
  }, [lastMove, onPlace]);

  console.log(lanes);

  const addPiece = laneIndex => {
    const newLane = lanes[laneIndex].slice();
    // get the first available placement for the new piece
    const openSpotIndex = newLane.indexOf(null);

    // if lane is full
    if (openSpotIndex === -1) {
      return;
    }

    newLane[openSpotIndex] = currentPlayer;
    
    const newLanes = lanes.slice();
    newLanes[laneIndex] = newLane;

    setLanes(newLanes);
    setLastMove({ x: laneIndex, y: openSpotIndex });
  }

  return (
    <div className='board'>
      {lanes.map((lane, i) => 
        <Lane key={i} lane={lane} addPiece={() => addPiece(i)} />
      )}
    </div>
  )
}

export default Board;
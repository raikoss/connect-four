import React, { useState, useEffect } from 'react';
import './board.css';
import Lane from '../Lane';

const winningLength = 4;

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

const checkDirection = (lanes, lastMove, xSize, ySize, currentPlayer, direction) => {
  let winCounter = 0;
  console.log('Check direction', direction);

  for (let i = 0; winCounter !== winningLength - 1; i++) {
    const currentX = lastMove.x + i*direction.x;
    const currentY = lastMove.y + i*direction.y;
    
    if (currentX < 0 || currentY < 0 || currentX > xSize - 1 || currentY > ySize - 1) {
      break;
    }

    console.log('Current X', currentX);
    console.log('Current Y', currentY);

    if (lanes[currentX][currentY] === currentPlayer) {
      winCounter++;
    } else {
      break;
    }
  }
  
  console.log(winCounter);
  return winCounter === winningLength - 1;
}

const checkForWinner = (lanes, lastMove, xSize, ySize, currentPlayer) => {
  checkDirection(lanes, lastMove, xSize, ySize, currentPlayer, { x: 1, y: 1 }); // up-right
  checkDirection(lanes, lastMove, xSize, ySize, currentPlayer, { x: 1, y: 0 }); // right
  checkDirection(lanes, lastMove, xSize, ySize, currentPlayer, { x: 1, y: -1 }); // down-right
  checkDirection(lanes, lastMove, xSize, ySize, currentPlayer, { x: 0, y: -1 }); // down
  checkDirection(lanes, lastMove, xSize, ySize, currentPlayer, { x: -1, y: -1 }); // down-left
  checkDirection(lanes, lastMove, xSize, ySize, currentPlayer, { x: -1, y: 0 }); // left
  checkDirection(lanes, lastMove, xSize, ySize, currentPlayer, { x: -1, y: 1 }); // up-left
}

const Board = ({ xSize, ySize, currentPlayer, onPlace }) => {
  const [lanes, setLanes] = useState(initLanes(xSize, ySize));
  const [lastMove, setLastMove] = useState();

  useEffect(() => {
    if (!lastMove) return;

    checkForWinner(lanes, lastMove, xSize, ySize, currentPlayer);
  }, [lanes, lastMove]);

  useEffect(() => {
    if (!lastMove) return;

    onPlace();
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
const winningLength = 4;

const checkDirection = ({ lanes, lastMove, xSize, ySize, currentPlayer}, direction) => {
  let pieceCounter = 0;
  console.log('Check direction', direction);

  for (let i = 1; pieceCounter !== winningLength - 1; i++) {
    const currentX = lastMove.x + i*direction.x;
    const currentY = lastMove.y + i*direction.y;
    
    if (currentX < 0 || currentY < 0 || currentX > xSize - 1 || currentY > ySize - 1) {
      break;
    }

    console.log('Current X', currentX);
    console.log('Current Y', currentY);

    if (lanes[currentX][currentY] === currentPlayer) {
      pieceCounter++;
    } else {
      break;
    }
  }
  
  console.log(pieceCounter);
  return pieceCounter;
}

const checkHorizontal = data => {
  const rightCount = checkDirection(data, { x: 1, y: 0 }); // right
  const leftCount = checkDirection(data, { x: -1, y: 0 }); // left

  return rightCount + leftCount === winningLength - 1; // -1 because of newly placed piece
}

const checkVertical = data => {
  // can not win by going upwards, as pieces fall from the top
  return checkDirection(data, { x: 0, y: -1 }) === winningLength - 1; // -1 because of newly placed piece
}

const checkDownLeftToUpRight = data => {
  const downLeftCount = checkDirection(data, { x: -1, y: -1 });
  const upRightCount = checkDirection(data, { x: 1, y: 1 });

  return downLeftCount + upRightCount === winningLength - 1; // -1 because of newly placed piece
}

const checkDownRightToUpLeft = data => {
  const downRightCount = checkDirection(data, { x: 1, y: -1 });
  const upLeftCount = checkDirection(data, { x: -1, y: 1 });

  return downRightCount + upLeftCount === winningLength - 1; // -1 because of newly placed piece
}

export default (lanes, lastMove, xSize, ySize, currentPlayer) => {
  const data = {
    lanes, 
    lastMove,
    xSize, 
    ySize,
    currentPlayer
  };

  const horizontal = checkHorizontal(data);
  const vertical = checkVertical(data);
  const diagonalRight = checkDownLeftToUpRight(data);
  const diagonalLeft = checkDownRightToUpLeft(data);

  return horizontal || vertical || diagonalLeft || diagonalRight;
}
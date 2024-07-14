import React, { useState } from 'react';
import Square from './Square';

const BOARD_SIZE = 8;

function Chessboard() {
  // State to hold the pawn's position
  const [pawnPosition, setPawnPosition] = useState({ row: 6, col: 0 });

  // Function to move the pawn up
  const movePawnUp = () => {
    setPawnPosition(prevPosition => {
      const newRow = (prevPosition.row - 1 + BOARD_SIZE) % BOARD_SIZE;
      return { row: newRow, col: prevPosition.col };
    });
  };

  // Function to move the pawn left
  const movePawnLeft = () => {
    setPawnPosition(prevPosition => {
      const newCol = (prevPosition.col - 1 + BOARD_SIZE) % BOARD_SIZE;
      return { row: prevPosition.row, col: newCol };
    });
  };

  // Function to move the pawn right
  const movePawnRight = () => {
    setPawnPosition(prevPosition => {
      const newCol = (prevPosition.col + 1) % BOARD_SIZE;
      return { row: prevPosition.row, col: newCol };
    });
  };

  // Generate the board with the pawn's current position
  const board = Array.from({ length: BOARD_SIZE }, (_, rowIndex) =>
    Array.from({ length: BOARD_SIZE }, (_, colIndex) => (
      <Square
        key={`${rowIndex}-${colIndex}`}
        isPawn={rowIndex === pawnPosition.row && colIndex === pawnPosition.col}
      />
    ))
  );

  return (
    <div>
      <div className="info">
        <p>Pawn Position: Row {pawnPosition.row + 1}, Column {pawnPosition.col + 1}</p>
        <button onClick={movePawnUp}>Move Pawn Up</button>
        <button onClick={movePawnLeft}>Move Pawn Left</button>
        <button onClick={movePawnRight}>Move Pawn Right</button>
      </div>
      <div className="chessboard">
        {board}
      </div>
    </div>
  );
}

export default Chessboard;

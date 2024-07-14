import React from 'react';

function Square({ isPawn }) {
  return (
    <div className={`square ${isPawn ? 'pawn' : ''}`}>
      {isPawn ? '♙' : ''}
    </div>
  );
}

export default Square;

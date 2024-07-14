import React, { useState } from 'react';
import './App.css';
import Chessboard from './components/Chessboard';

function App() {
  return (
    <div className="App">
      <h1>Chess Pawn Movement</h1>
      <Chessboard />
    </div>
  );
}

export default App;

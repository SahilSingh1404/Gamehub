import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TicTacToe from "./components/TicTacToe";
import RockPaperScissor from './components/RockPaperScissor';
import EightQueens from '../src/components/EightQueens/EightQueens.jsx'
import SnakeGame from '../src/components/SnakeGame/SnakeGame.jsx'
import NewGame from '../src/NewGame/NewGame.js'

export default function App() {
  return (
     <div>
      <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/tictactoe" element={<TicTacToe/>} />
        <Route exact path="/rockpaperscissor" element={<RockPaperScissor/>} />
        <Route exact path="/eightqueens" element={<EightQueens/>} />
        <Route exact path="/snakegame" element={<SnakeGame/>} />
        <Route exact path="/newgame" element={<NewGame/>} />
     </Routes>
     </Router>
     </div>

  );
}

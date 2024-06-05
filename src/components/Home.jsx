import React from "react";
import tictactoe from "../assets/tictactoe.jpg";
import rockpaperscissor from "../assets/rockpaperscissor.jpg";
import "../styles/Home.css";
import eightqueen from '../assets/eightqueen.jpg'
import snakegame from '../assets/snakegame.jpg'
import newgame from '../assets/newgame.jpg'

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="container">
        <h1 className="inner-container">Games Website</h1>
        <div className="container-2">
          <div className="tic-tac">
            <img src={tictactoe} alt="Error" />
            <h2 className="game-name">Tic Tac Toe</h2>
            <Link to="/tictactoe">
              <button className="home-button">Play</button>
            </Link>
          </div>
          <div className="rock-paper">
            <img className="img-2" src={rockpaperscissor} alt="Error" />
            <h2 className="game-name">Rock Paper Scissors</h2>
            <Link to="/rockpaperscissor">
              <button className="home-button">Play</button>
            </Link>
          </div>
          <div className="eight-queens">
            <img className="img-3" src={eightqueen} alt="Error" />
            <h2 className="game-name">Eight Queens Problem</h2>
            <Link to="/eightqueens">
              <button className="home-button">Play</button>
            </Link>
          </div>
          <div className="snake-game">
            <img src={snakegame} alt="Error" />
            <h2 className="game-name">Snakes Game</h2>
            <Link to="/snakegame">
              <button className="home-button">Play</button>
            </Link>
          </div>
          <div className="new-game">
            <img src={newgame} alt="Error" />
            <h2 className="game-name">Breakout Game</h2>
            <Link to="/newgame">
              <button className="home-button">Play</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

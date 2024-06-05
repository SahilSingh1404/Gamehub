import './EightQueens.css';
import * as attack from './UnderAttack.js';
import * as helpers from './helpers.js';
import Chessboard from 'chessboardjsx';
import didYouKnowArray from './DidYouKnow.js';
import React, { Component } from 'react';
import Status from './Status.js';
import Tidbits from './Tidbits';
import Timer from './Timer.js';
import Title from './Title.js';

const gameName    = 'Eight Queens';
const gameVersion = '0.6.1';

class EightQueens extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            attacked: [], 
            position: {}, 
            gameStatus: 'playing',
            queensOnBoard: 0,
            queensUnderAttack: 0,
            showAttackPaths: false,
            attackedSquares: 0,
        };
        this.onSquareClick = this.onSquareClick.bind(this);
        this.toggleAttackPaths = this.toggleAttackPaths.bind(this);
    }

   
    onSquareClick = square => {
        let position = this.state.position; 
        if (position[[square]]) {
            delete position[[square]]; 
        } else {
            if (Object.keys(position).length === 8) {
                return;
            }
            position[[square]] = 'wQ'; 
        }

        const attacked = attack.underAttack(position); 

        Object.keys(position).forEach(function(square) { 
           if (attacked.includes(square) && square !== 'bQ') {   
               position[square] = 'bQ';                          
           } else if (square !== 'wQ') { 
               position[square] = 'wQ'; 
           }
        });

        let queensOnBoard = Object.keys(position).length;
        let queensUnderAttack = 0;
        if (attacked) {
            queensUnderAttack = attacked.length;
        }
        let gameStatus = 'playing';
        if (queensOnBoard === 8 && queensUnderAttack === 0) {
            gameStatus = 'solved';
        }

        this.setState({
            attacked: attacked,
            position: position,
            queensOnBoard: queensOnBoard,
            queensUnderAttack: queensUnderAttack,
            attackedSquares: attack.attackedSquares(position),
            gameStatus: gameStatus,
        });
    };

    toggleAttackPaths() {
        const showAttackPaths = !this.state.showAttackPaths;
        let attackedSquares = this.state.attackedSquares;
        if (!showAttackPaths) {
            attackedSquares = attack.attackedSquares(this.state.position);
        }
        this.setState({
            showAttackPaths: showAttackPaths,
            attackedSquares: attackedSquares,
        });
    }

    render() {
        const fenPosition = helpers.objToFen(this.state.position);

        let squareStyles = {};
        let showAttackPathsText = 'Show';
        if (this.state.showAttackPaths) {
            showAttackPathsText = 'Hide';
            if (this.state.attackedSquares.length) {
                this.state.attackedSquares.forEach(function(square) {
                    squareStyles[square]= {
                        background: "radial-gradient(circle, orange, transparent 50%)",
                    };
                });
            }
        }

        return (
            <div className="EightQueens">
                <div className="EightQueens-header">
                    <Title
                        gameName={gameName}
                        gameVersion={gameVersion}
                    />
                    <Status
                        queensOnBoard={this.state.queensOnBoard}
                        queensUnderAttack={this.state.queensUnderAttack}
                    />
                    <Timer
                        gameStatus={this.state.gameStatus}
                    />
                </div>
                <Chessboard
                    id="EightQueens"
                    position={fenPosition}
                    key={fenPosition}
                    sparePieces={false}
                    draggable={false}
                    calcWidth={({screenWidth}) => (screenWidth < 500 ? 350 : 480)}
                    onSquareClick={this.onSquareClick}
                    squareStyles={squareStyles}
                    
                />
                <div className="EightQueens-didyouknow">
                    <Tidbits
                        interval="8000"
                        order="random"
                        tidbits={didYouKnowArray}
                    />
                </div>
                <div className="EightQueens-instructions">
                    - Place <b>Eight Queens</b> with none under attack!
                    <br />
                    - Click a square to place a Queen. Click a Queen to remove it.
                </div>
                <div className="EightQueens-header">
                    <button
                        className="EightQueens-paths"
                        onClick={this.toggleAttackPaths}
                    >
                        {showAttackPathsText} attack paths
                    </button>
                    <button className="EightQueens-restart">
                        <a href="/eightqueens" >Restart</a>
                    </button>
                </div>
            </div>
        );
    }
}

export default EightQueens;
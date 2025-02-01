import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from './winning-combinations.js';
import GameOver from "./components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';
      if(gameTurns.length>0 && gameTurns[0].player === 'X'){
        currentPlayer = 'O';
      }
      return currentPlayer;
}

function deriveWinner(gameBoard, players){
  let winner;
  for (const comibination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[comibination[0].row][comibination[0].column]
    const secondSquareSymbol =  gameBoard[comibination[1].row][comibination[1].column]
    const thirdSquareSymbol = gameBoard[comibination[2].row][comibination[2].column]

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
        winner = players[firstSquareSymbol];
    }
  }
  return winner;
}

function App() {
  
  const [players, setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2',
  });
  const [gameTurns, setGameTurns]  = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map(array=>[...array])];

    for(const turn of gameTurns){
        const {square, player} = turn;
        const {row, col} = square;
        gameBoard[row][col] = player;
    }
  
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length===9 && !winner;
  function handleSelectSquare(row, col){
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updateTurns = [{square: {row: row, col:col}, player: currentPlayer},...prevTurns];
      return updateTurns;
    });
    
  }

  function handleRestart(){
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName){
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol] : newName
      }
    });
  }

  return (
    <>
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player1" symbol="X" isActive={ activePlayer === 'X'} onChangeName={handlePlayerNameChange} />
          <Player initialName="Player2" symbol="O" isActive={ activePlayer === 'O'} onChangeName={handlePlayerNameChange} ></Player>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
    </>
  );
}

export default App

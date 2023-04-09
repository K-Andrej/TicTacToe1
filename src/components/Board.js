import React, { useState, useEffect, useCallback } from "react";
import Square from "./Square";
import GameInfo from "./GameInfo";
import { checkWinner } from "./CheckWinner";


const Board = ({ gameType }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleSquareClick = useCallback(
    (index) => {
      if (board[index] || winner) {
        return;
      }

      const newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard);

      const newPlayer = player === "X" ? "O" : "X";
      setPlayer(newPlayer);
    },
    [board, player, winner]
  );

  useEffect(() => {
    const winner = checkWinner(board);
    if (winner) {
      setWinner(winner);
    }
  }, [board]);

  useEffect(() => {
    if (gameType === "BOT" && player === "O" && !winner) {
      const emptySquares = board.reduce(
        (earr, val, index) => (val === null ? earr.concat(index) : earr),
        []
      );
      const randomIndex =
        emptySquares[Math.floor(Math.random() * emptySquares.length)];
      handleSquareClick(randomIndex);
    }
  }, [player, board, winner, gameType, handleSquareClick]);

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
  };

  return (
    <>
      <div className="board-row">
        <Square value={board[0]} onClick={() => handleSquareClick(0)} />
        <Square value={board[1]} onClick={() => handleSquareClick(1)} />
        <Square value={board[2]} onClick={() => handleSquareClick(2)} />
      </div>
      <div className="board-row">
        <Square value={board[3]} onClick={() => handleSquareClick(3)} />
        <Square value={board[4]} onClick={() => handleSquareClick(4)} />
        <Square value={board[5]} onClick={() => handleSquareClick(5)} />
      </div>
      <div className="board-row">
        <Square value={board[6]} onClick={() => handleSquareClick(6)} />
        <Square value={board[7]} onClick={() => handleSquareClick(7)} />
        <Square value={board[8]} onClick={() => handleSquareClick(8)} />
      </div>
      <GameInfo player={player} winner={winner} handleReset={handleReset} />
    </>
  );
};

export default Board;
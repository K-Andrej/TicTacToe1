import React from "react";
import classes from "./Board.module.css";

const GameInfo = ({ player, winner, handleReset }) => {
  return (
    <div className="game-info">
      {winner ? (
        <>
          <h2 className={classes.win_text}>{winner === "tie" ? "It's a tie!" : `${winner} wins!`}</h2>
          <button className={classes.resetANDgoback} onClick={handleReset}>
            Play Again
          </button>
        </>
      ) : (
        <h2 className={classes.win_text}>{`Player ${player}'s turn`}</h2>
      )}
    </div>
  );
};

export default GameInfo;

import React, { useState } from "react";
import Board from "./components/Board";

import classes from "./components/Board.module.css";

const App = () => {
  const [gameType, setGameType] = useState(null);

  const handleBackButtonClick = () => {
    setGameType(null);
  };

  const handleGameTypeSelect = (type) => {
    setGameType(type);
  };

  return (
    <div className={classes.app}>
      {gameType ? (
        <>
          <button className={classes.resetANDgoback} onClick={() => handleBackButtonClick()}>Go Back</button>
          <Board gameType={gameType} />
        </>
      ) : (
        <div>

          <div className={classes.text_select}>
            <h3>SELECT GAME TYPE</h3>
          </div>

          <div>
          <button className={classes.gameMode} onClick={() => handleGameTypeSelect("PvP")}>
            P v P
          </button>
          <button className={classes.gameMode} onClick={() => handleGameTypeSelect("BOT")}>
            P v BOT
          </button>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default App;

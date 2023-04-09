import React from "react";
import classes from "./Board.module.css";

const Square = ({ value, onClick }) => {
  return (
    <button className={classes.square} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;

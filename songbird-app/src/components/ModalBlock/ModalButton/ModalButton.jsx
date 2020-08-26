import React from "react";
import classes from "./ModalButton.module.scss";

const ModalButton = (props) => {
  const clickRepeatButtonHandler = () => {
    props.newSetState("currentScore", 0);
    props.newSetState("activeRound", 0);
    props.newSetState("roundPoints", 5);
    props.newSetState("getRightAnswer", false);
    props.newSetState("rightAnswerNumber", 1);
    props.newSetState("userAnswer", null);
    props.newSetState("isGameFinished", false);
  };

  return (
    <button className={classes.ModalButton} onClick={clickRepeatButtonHandler}>
      Попробовать еще раз!
    </button>
  );
};

export default ModalButton;

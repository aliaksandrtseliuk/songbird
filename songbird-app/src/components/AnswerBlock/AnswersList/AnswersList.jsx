import React from "react";
import classes from "./AnswersList.module.scss";
import AnswersItem from "./AnswersItem/AnswersItem.jsx";

const AnswersList = (props) => {
  return (
    <ul className={classes.AnswersList}>
      {props.answers.map((item, index) => {
        return (
          <AnswersItem
            key={index}
            text={item.name}
            id={item.id}
            rightAnswerNumber={props.rightAnswerNumber}
            getRightAnswer={props.getRightAnswer}
            currentScore={props.currentScore}
            roundPoints={props.roundPoints}
            newSetState={props.newSetState}
          />
        );
      })}
    </ul>
  );
};

export default AnswersList;

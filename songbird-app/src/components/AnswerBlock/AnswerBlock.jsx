import React, { Component } from "react";
import classes from "./AnswerBlock.module.scss";
import AnswersList from "./AnswersList/AnswersList.jsx";
import YourAnswerBlock from "./YourAnswerBlock/YourAnswerBlock.jsx";

class AnswerBlock extends Component {
  render() {
    const {
      currentScore,
      answers,
      roundPoints,
      rightAnswerNumber,
      getRightAnswer,
      userAnswer,
      newSetState,
    } = this.props;

    return (
      <section className={classes.AnswerBlock}>
        <AnswersList
          currentScore={currentScore}
          answers={answers}
          roundPoints={roundPoints}
          rightAnswerNumber={rightAnswerNumber}
          getRightAnswer={getRightAnswer}
          newSetState={newSetState}
        />
        <YourAnswerBlock
          currentBird={answers[userAnswer]}
          userAnswer={userAnswer}
        />
      </section>
    );
  }
}

export default AnswerBlock;

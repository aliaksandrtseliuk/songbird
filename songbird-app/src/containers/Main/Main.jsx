import React, { Component } from 'react'
import classes from './Main.module.scss'

import birdsData from '../../data'

import RoundsList from '../../components/RoundsList/RoundsList.jsx'
import ActiveQuestion from '../../components/ActiveQuestion/ActiveQuestion.jsx'
import AnswerBlock from '../../components/AnswerBlock/AnswerBlock.jsx'
import LevelButton from '../../components/LevelButton/LevelButton.jsx'

class Main extends Component {
  render() {
    const { 
      currentScore, 
      rounds, 
      activeRound, 
      roundPoints, 
      userAnswer, 
      rightAnswerNumber, 
      getRightAnswer 
    } = this.props;

    return (
      <section className={classes.Main}>
        <RoundsList 
          rounds={rounds}
        />
        <ActiveQuestion 
          getRightAnswer = {getRightAnswer}
          rightAnswerNumber = {rightAnswerNumber}
          currentQuestion = {birdsData[0][0]}
        />
        <AnswerBlock
          currentScore = {currentScore} 
          answers={birdsData[activeRound]}
          roundPoints={roundPoints}
          rightAnswerNumber={rightAnswerNumber}
          getRightAnswer={getRightAnswer}
          activeRound={activeRound}
          userAnswer = { userAnswer }
        />
        <LevelButton />
      </section>
    )
  }
}

export default Main
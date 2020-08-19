import React, { Component } from 'react'
import classes from './Main.module.scss'

import birdsData from '../../data'

import RoundsList from '../../components/RoundsList/RoundsList.jsx'
import ActiveQuestion from '../../components/ActiveQuestion/ActiveQuestion.jsx'
import AnswerBlock from '../../components/AnswerBlock/AnswerBlock.jsx'
import LevelButton from '../../components/LevelButton/LevelButton.jsx'

import ModalBlock from '../../components/ModalBlock/ModalBlock.jsx'

class Main extends Component {
  render() {
    const { 
      currentScore, 
      rounds, 
      activeRound, 
      roundPoints, 
      rightAnswerNumber,
      userAnswer, 
      getRightAnswer,
      newSetState,
      isGameFinished,
    } = this.props;

    if (!isGameFinished) {
      return (
        <section className={classes.Main}>
          <RoundsList 
            rounds = {rounds}
            activeRound = {activeRound}
          />
          <ActiveQuestion 
            getRightAnswer = {getRightAnswer}
            rightAnswerNumber = {rightAnswerNumber}
            currentQuestionsBlock = {birdsData[activeRound]}
            newSetState = {newSetState}
          />
          <AnswerBlock
            currentScore = {currentScore} 
            answers={birdsData[activeRound]}
            roundPoints={roundPoints}
            userAnswer={userAnswer}
            rightAnswerNumber={rightAnswerNumber}
            getRightAnswer={getRightAnswer}
            newSetState = {newSetState}
          />
          <LevelButton 
            getRightAnswer={getRightAnswer}
            newSetState = {newSetState}
            activeRound={activeRound}
          />
        </section>
      )
    } else {
      return (
        <section className={classes.Main}>
          <RoundsList 
            rounds={rounds}
          />
          <ModalBlock 
            currentScore = {currentScore} 
            newSetState = {newSetState}
          />
        </section>
      )
    }
    
  }
}

export default Main
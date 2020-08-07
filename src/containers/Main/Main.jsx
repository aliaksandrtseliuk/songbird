import React, { Component } from 'react'
import classes from './Main.module.scss'
import birdsData from '../../data'
import RoundsList from '../../components/RoundsList/RoundsList.jsx'
import ActiveQuestion from '../../components/ActiveQuestion/ActiveQuestion.jsx'
import AnswerBlock from '../../components/AnswerBlock/AnswerBlock.jsx'
import LevelButton from '../../components/LevelButton/LevelButton.jsx'

class Main extends Component {
  state={
    rounds: ['Водоплавающие', 'Лесные', 'Хищники', 'Насекомоядные', 'Луговые', 'Болотные']
  }

  render() {
    return (
      <section className={classes.Main}>
        <RoundsList 
          rounds={this.state.rounds}
        />
        <ActiveQuestion />
        <AnswerBlock 
          answers={birdsData[0]}
        />
        <LevelButton />
      </section>
    )
  }
}

export default Main
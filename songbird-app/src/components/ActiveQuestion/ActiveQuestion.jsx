import React, { Component } from 'react'
import classes from './ActiveQuestion.module.scss'

import QuestionImage from './QuestionImage/QuestionImage.jsx'
import QuestionBirdName from './QuestionBirdName/QuestionBirdName.jsx'
import QuestionPlayer from './QuestionPlayer/QuestionPlayer.jsx'

class ActiveQuestion extends Component {

  componentDidMount() {
    const newRightAnswerNumber = Math.floor(Math.random() * 6) + 1
    console.log(newRightAnswerNumber)
    this.setState({
      rightAnswerNumber: newRightAnswerNumber,
    })
  }

  render() {
    const { getRightAnswer, currentQuestion } = this.props;

    return (
      <section className={classes.ActiveQuestion}>
        <QuestionImage 
          getRightAnswer = {getRightAnswer}
        />
        <QuestionBirdName />
        <QuestionPlayer 
          audio = {currentQuestion.audio}
        />
      </section>
    )
  }
}

export default ActiveQuestion
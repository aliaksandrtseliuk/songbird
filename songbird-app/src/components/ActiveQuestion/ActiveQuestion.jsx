import React, { Component } from 'react'
import classes from './ActiveQuestion.module.scss'

import QuestionImage from './QuestionImage/QuestionImage.jsx'
import QuestionBirdName from './QuestionBirdName/QuestionBirdName.jsx'

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss'

class ActiveQuestion extends Component {

  componentDidMount() {
    const newRightAnswerNumber = Math.floor(Math.random() * 6) + 1
    console.log(newRightAnswerNumber)
    this.setState({
      rightAnswerNumber: newRightAnswerNumber,
    })
  }

  // componentDidUpdate() {
  //   const { getRightAnswer } = this.props;
  //   if (getRightAnswer) {
  //       this.player.audio.pause()
  //   }
  // }

  render() {
    const { getRightAnswer, currentQuestionsBlock, rightAnswerNumber } = this.props;

    return (
      <section className={classes.ActiveQuestion}>
        <QuestionImage 
          currentQuestionsBlock = {currentQuestionsBlock}
          getRightAnswer = {getRightAnswer}
          rightAnswerNumber = {rightAnswerNumber}
        />
        <QuestionBirdName 
          currentQuestionsBlock = {currentQuestionsBlock}
          getRightAnswer = {getRightAnswer}
          rightAnswerNumber = {rightAnswerNumber}
        />
        <AudioPlayer
          className={classes.QuestionPlayer}
          src = {currentQuestionsBlock[rightAnswerNumber - 1].audio}
          autoPlayAfterSrcChange={false}
          ref={c => (this.player = c)}
        />
      </section>
    )
  }
}

export default ActiveQuestion
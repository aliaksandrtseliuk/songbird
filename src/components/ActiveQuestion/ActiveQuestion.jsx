import React from 'react'
import classes from './ActiveQuestion.module.scss'
import QuestionImage from './QuestionImage/QuestionImage.jsx'
import QuestionBirdName from './QuestionBirdName/QuestionBirdName.jsx'
import QuestionPlayer from './QuestionPlayer/QuestionPlayer.jsx'

const ActiveQuestion = props => {
  return (
    <section className={classes.ActiveQuestion}>
      <QuestionImage />
      <QuestionBirdName />
      <QuestionPlayer />
    </section>
  )
}

export default ActiveQuestion
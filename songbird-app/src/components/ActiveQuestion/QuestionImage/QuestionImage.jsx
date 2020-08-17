import React from 'react'
import classes from './QuestionImage.module.scss'
import unknownBird from '../../../assets/img/unknown_bird.jpg'

const QuestionImage = props => {
  return (
    <div className={classes.QuestionImage}>
      <img 
        src={props.getRightAnswer ? props.currentQuestionsBlock[props.rightAnswerNumber - 1].image : unknownBird} 
        alt={props.getRightAnswer ? props.currentQuestionsBlock[props.rightAnswerNumber - 1].name : 'unknown_bird'} 
      />
    </div>
  )
}

export default QuestionImage
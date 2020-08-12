import React from 'react'
import classes from './QuestionImage.module.scss'
import unknownBird from '../../../assets/img/unknown_bird.jpg'

const QuestionImage = props => {
  return (
    <div className={classes.QuestionImage}>
      <img 
        src={props.getRightAnswer ? '' : unknownBird} 
        alt={props.getRightAnswer ? '' : 'unknown_bird'} 
      />
    </div>
  )
}

export default QuestionImage
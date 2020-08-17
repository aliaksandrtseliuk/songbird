import React from 'react'
import classes from './QuestionBirdName.module.scss'

const QuestionBirdName = props => {
  return (
    <div>
      <h3 
        className={classes.QuestionBirdName}
      >{props.getRightAnswer ? props.currentQuestionsBlock[props.rightAnswerNumber - 1].name : '******'}
      </h3>
      <hr/>
    </div>
  )
}

export default QuestionBirdName
import React from 'react'
import classes from './AnswersList.module.scss'
import AnswersItem from './AnswersItem/AnswersItem.jsx'

const AnswersList = props => {
  console.log(props)
  return (
    <ul className={classes.AnswersList}>
      { props.answers.answers.map((item, index) => {
        return (
          <AnswersItem 
            key={index}
            text={item.name}
          />
        )
      }) }
    </ul>
  )
}

export default AnswersList
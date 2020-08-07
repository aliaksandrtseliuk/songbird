import React from 'react'
import classes from './AnswersItem.module.scss'

const AnswersItem = props => {
  return (
    <li className={classes.AnswersItem}>
      { props.text}
    </li>
  )
}

export default AnswersItem
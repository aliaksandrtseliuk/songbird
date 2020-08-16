import React from 'react'
import classes from './Score.module.scss'

const Score = props => {
  return (
  <p className={classes.Score}>Баллы: {props.currentScore}</p>
  )
}

export default Score
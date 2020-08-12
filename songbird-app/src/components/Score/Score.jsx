import React from 'react'
import classes from './Score.module.scss'

const Score = props => {
  return (
  <p className={classes.Score}>Score: {props.currentScore}</p>
  )
}

export default Score
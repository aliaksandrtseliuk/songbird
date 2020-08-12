import React from 'react'
import classes from './RoundsItem.module.scss'

const RoundsItem = props => {
  return (
    <li className={classes.RoundsItem}>
      { props.title }
    </li>
  )
}

export default RoundsItem
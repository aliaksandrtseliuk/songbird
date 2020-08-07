import React from 'react'
import classes from './RoundsList.module.scss'
import RoundsItem from './RoundsItem/RoundsItem.jsx'

const RoundsList = props => {
  return (
    <ul className={classes.RoundsList}>
      { props.rounds.map((item, index) => {
        return (
          <RoundsItem 
            key={index}
            title={item}
          />
        )
      })}
    </ul>
  )
}

export default RoundsList
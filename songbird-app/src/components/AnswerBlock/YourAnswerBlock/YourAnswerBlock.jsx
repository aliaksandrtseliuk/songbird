import React from 'react'
import classes from './YourAnswerBlock.module.scss'

import BirdInfo from './BirdInfo/BirdInfo.jsx'

const YourAnswerBlock = props => {
  return (
    <div className={classes.YourAnswerBlock}>
      { props.userAnswer || props.userAnswer === 0? 
        <BirdInfo 
          bird = { props.currentBird }
        /> 
        : <p>Послушайте плеер.<br />Выберите птицу из списка</p>}
    </div>
  )
}

export default YourAnswerBlock
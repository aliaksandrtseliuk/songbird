import React from 'react'
import classes from './LevelButton.module.scss'

const LevelButton = props => {
  const clickNextLevelHandler = () => {
    const newRightAnswerNumber = Math.floor(Math.random() * 6) + 1;
    const newRound = props.activeRound + 1;

    if (newRound === 6) {
      return props.newSetState('isGameFinished', true)
    }

    props.newSetState('activeRound', newRound);
    props.newSetState('rightAnswerNumber', newRightAnswerNumber);
    props.newSetState('userAnswer', null);
    props.newSetState('getRightAnswer', false);
    props.newSetState('roundPoints', 5);
  }

  const cls = [classes.LevelButton]

  if (props.getRightAnswer) {
    cls.push(classes.enabled)
  }

  return (
    <button 
      className={cls.join(' ')}
      onClick={clickNextLevelHandler}
      disabled={!props.getRightAnswer}
    >
      Далее
    </button>
  )
}

export default LevelButton
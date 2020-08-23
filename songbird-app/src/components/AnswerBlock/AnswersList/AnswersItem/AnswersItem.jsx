import React, { Component } from 'react'
import classes from './AnswersItem.module.scss'

import correctSoundUrl from '../../../../assets/sounds/correct.mp3'
import wrongSoundUrl from '../../../../assets/sounds/error.mp3'

class AnswersItem extends Component {
  state = {
    status: null
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    if (nextProps.text !== this.props.text) {
      nextState.status = null;
    }
  }

  getUserAnswer = () => {
    const {
      id, 
      rightAnswerNumber, 
      getRightAnswer, 
      currentScore, 
      roundPoints, 
      newSetState,
    } = this.props;

    const rightAnswerSound = new Audio();
    const wrongAnswerSound = new Audio();
    rightAnswerSound.src = correctSoundUrl;
    wrongAnswerSound.src = wrongSoundUrl;

    newSetState('userAnswer', id - 1)

    if (getRightAnswer) return
    else {
      if (id === rightAnswerNumber) {
        rightAnswerSound.play()

        this.setState({
          isCorrectAnswerItem : true,
          status: 'success'
        })

        newSetState('getRightAnswer', true)
        newSetState('currentScore', currentScore + roundPoints)
      } else {
        const currentPonts = roundPoints - 1
        newSetState('roundPoints', currentPonts)
        wrongAnswerSound.play()

        this.setState({
          status: 'error'
        })
      }
    }
  }

  render() {
    const {id, text} = this.props;
    const cls = [classes.Circle]

    if (this.state.status === 'success') {
      cls.push(classes.success)
    } else if (this.state.status === 'error') {
      cls.push(classes.error)
    }

    return (
      <li 
        className={classes.AnswersItem}
        id={id}
        onClick={this.getUserAnswer}
      >
        <span className={cls.join(' ')}></span>{text}
      </li>
    )
  }
}

export default AnswersItem
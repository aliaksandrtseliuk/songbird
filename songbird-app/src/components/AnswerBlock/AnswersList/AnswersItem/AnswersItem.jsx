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
      userAnswer, 
      currentScore, 
      roundPoints, 
      activeRound,
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
    const cls = [classes.AnswersItem]

    // switch (this.state.status) {
    //   case 'success' : cls.push(classes.success)
    //   break;
    //   case 'error' : cls.push(classes.error)
    //   break;
    //   default: console.log('ОК');
    // }

    if (this.state.status === 'success') {
      cls.push(classes.success)
    } else if (this.state.status === 'error') {
      cls.push(classes.error)
    }

    return (
      <li 
        className={cls.join(' ')}
        id={id}
        onClick={this.getUserAnswer}
      >
        {text}
      </li>
    )
  }
}

export default AnswersItem